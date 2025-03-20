# For the issue that hang bun install: https://github.com/oven-sh/bun/issues/5831
FROM nguyenkhoi1610/public-bun-base-1.1.29 AS base
WORKDIR /app

# Stage 1: Install
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile --verbose

RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production --verbose

# Stage 2: Build
FROM base AS builder
COPY --from=install /temp/dev/node_modules node_modules
COPY . .
ENV NODE_ENV=production
RUN bun run build

# Stage 3: Production
FROM oven/bun:1.1.29 AS production
WORKDIR /app

COPY --from=install --chown=bun:bun /temp/prod/node_modules ./node_modules
COPY --from=builder --chown=bun:bun /app/.next ./.next
COPY --from=builder /app/public ./public

# Ensure Node.js is explicitly available - containerd issue
RUN ln -s $(bun which node) /usr/local/bin/node

USER bun
EXPOSE 3000/tcp
CMD ["bun", "next", "start", "-p", "3000"]
