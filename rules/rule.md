# Quy Tắc Chung Cho Source Code

## 1. Tổng Quan Dự Án

### 1.1. Technology Stack

- **Framework**: Next.js 15.2.3 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 + Radix UI
- **State Management**: TanStack Query (React Query) v5
- **API Client**: Axios
- **Validation**: Zod v4
- **Internationalization**: next-intl v4
- **Package Manager**: Bun

### 1.2. Cấu Trúc Thư Mục Chính

```
src/
├── api/              # Cấu hình API client (axios instances)
├── app/              # Next.js App Router pages
│   └── [locale]/     # Routes với internationalization
├── components/       # React components
│   ├── Common/       # Components dùng chung (Header, Footer, etc.)
│   ├── Home/         # Components cho trang Home
│   └── ui/           # UI components từ Radix UI + shadcn
├── configs/          # Configuration files (env, providers)
├── constants/        # Constant values và default data
├── hooks/            # Custom React hooks (data fetching)
│   ├── o-phim/       # Hooks cho domain o-phim
│   └── k-phim/       # Hooks cho domain k-phim
├── i18n/             # Internationalization config
├── lib/              # Utility functions
├── messages/         # Translation files (JSON)
├── schemas/          # Zod validation schemas
├── services/         # API service functions
│   ├── o-phim/       # Services cho domain o-phim
│   └── k-phim/       # Services cho domain k-phim
└── types/            # TypeScript type definitions
```

---

## 2. Quy Tắc Đặt Tên (Naming Conventions)

### 2.1. Files

#### Components

- **Format**: `kebab-case.tsx`
- **Ví dụ**: `header.tsx`, `search-bar.tsx`, `movie-card.tsx`
- **Export**: Default export với PascalCase

```typescript
// ✅ Đúng
export default function MovieCard() { ... }

// ❌ Sai
export function movieCard() { ... }
export const MovieCard = () => { ... }
```

#### Services

- **Format**: `*-service.ts` hoặc `*-service-kphim.ts`
- **Ví dụ**:
  - `list-movie-service.ts`
  - `info-movie-service.ts`
  - `list-categories-service.ts`
- **Function naming**:
  - Prefix: `get*`, `post*`, `put*`, `delete*`
  - Suffix: `Service` hoặc `ServiceKphim` (cho k-phim domain)
  - Ví dụ: `getListMovieService`, `getMovieInfoService`, `getListCategoriesServiceKphim`

#### Hooks

- **Format**: `use-*.ts`
- **Ví dụ**: `use-get-movies.ts`, `use-get-movie-info.ts`, `use-get-categories.ts`
- **Function naming**:
  - Prefix: `use` + PascalCase
  - Ví dụ: `useGetMovies`, `useGetMovieInfo`, `useGetCategoriesKphim`

#### Types

- **Format**: `kebab-case.ts`
- **Ví dụ**: `movie.ts`, `movie-category.ts`, `common.ts`
- **Type naming**: PascalCase
- **Interface naming**: PascalCase với prefix `I` (tùy chọn) hoặc không có prefix

#### Schemas

- **Format**: `kebab-case.ts`
- **Ví dụ**: `movie.ts`, `movie-category.ts`, `common.ts`
- **Schema naming**: PascalCase + suffix `Schema`
- **Ví dụ**: `MovieSchema`, `MovieCategorySchema`, `PaginationSchema`

### 2.2. Variables & Functions

- **Variables**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Functions**: `camelCase`
- **Components**: `PascalCase`
- **Types/Interfaces**: `PascalCase`

---

## 3. Cấu Trúc Router (App Router)

### 3.1. Route Structure

Tất cả routes phải nằm trong `app/[locale]/` để hỗ trợ internationalization.

```
app/
└── [locale]/
    ├── layout.tsx          # Root layout
    ├── page.tsx            # Home page (/)
    ├── privacy-policy/
    │   └── page.tsx        # /privacy-policy
    └── terms-of-service/
        └── page.tsx        # /terms-of-service
```

### 3.2. Layout Pattern

- Sử dụng `layout.tsx` cho shared layouts
- Mỗi route segment có thể có `layout.tsx` riêng
- Layout phải wrap children với providers cần thiết

```typescript
// app/[locale]/layout.tsx
export default async function RootLayout({
  children,
  params
}: LayoutProps) {
  const { locale } = await params;
  // Validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

### 3.3. Page Components

- Server Components mặc định (không cần `'use client'`)
- Client Components khi cần interactivity (thêm `'use client'` ở đầu file)
- Sử dụng `async/await` cho Server Components

```typescript
// Server Component (mặc định)
export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  // Fetch data, etc.
  return <div>...</div>;
}

// Client Component (khi cần)
'use client'
export default function InteractivePage() {
  const [state, setState] = useState();
  return <div>...</div>;
}
```

---

## 4. API & Services Layer

### 4.1. API Client Configuration

Tạo axios instance trong `src/api/axios.ts`:

```typescript
import { NEXT_PUBLIC_API_STORIMS_URL } from '@/configs/env'
import axios from 'axios'
import queryString from 'query-string'

export const axiosInstance = axios.create({
  baseURL: `${NEXT_PUBLIC_API_STORIMS_URL}`,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params: any) => queryString.stringify({ ...params }),
})
```

### 4.2. Service Layer Structure

Services được tổ chức theo domain và nằm trong `src/services/`:

```
services/
├── o-phim/
│   ├── home/
│   │   └── home-service.ts
│   ├── movies/
│   │   ├── list-movie-service.ts
│   │   ├── movie-info-service.ts
│   │   └── actor-movie-service.ts
│   └── categories/
│       └── list-category-service.ts
└── k-phim/
    ├── info-movie/
    │   └── info-movie-service.ts
    └── categories/
        └── list-categories-service.ts
```

### 4.3. Service Function Pattern

```typescript
import { BaseServiceResponse } from '@/types/common'
import { axiosInstance } from '@/api/axios'
import { NEXT_PUBLIC_API_URL } from '@/configs/env'
import { GetListMoviesResponse } from '@/types/movie'
import { RequestMovieSchema } from '@/schemas/movie'
import { RequestMovie } from '@/types/movie'

export async function getListMovieService(options: RequestMovie): Promise<BaseServiceResponse<GetListMoviesResponse>> {
  try {
    // Validate input với Zod schema
    const params = RequestMovieSchema.parse(options)

    // Call API
    const response = await axiosInstance.get<GetListMoviesResponse>(`${NEXT_PUBLIC_API_URL}/danh-sach/${params.slug}`, {
      params: {
        ...params,
      },
    })

    const { data } = response

    // Return standardized response
    return {
      data,
      message: response.statusText,
      success: true,
    }
  } catch (e) {
    return e as BaseServiceResponse<GetListMoviesResponse>
  }
}
```

**Quy tắc Service:**

1. ✅ Luôn return `BaseServiceResponse<T>`
2. ✅ Sử dụng Zod schema để validate input (nếu có)
3. ✅ Type-safe với TypeScript generics
4. ✅ Error handling với try-catch
5. ✅ Sử dụng axiosInstance từ `@/api/axios`
6. ✅ Import API URL từ `@/configs/env`

---

## 5. Custom Hooks (Data Fetching)

### 5.1. Hooks Structure

Hooks được tổ chức theo domain và mirror structure của services:

```
hooks/
├── o-phim/
│   ├── home/
│   │   └── use-get-home.ts
│   ├── movies/
│   │   ├── use-get-movies.ts
│   │   └── use-get-movie-info.ts
│   └── categories/
│       └── use-get-categories.ts
└── k-phim/
    ├── info-movie/
    │   └── use-get-info-movie.ts
    └── categories/
        └── use-get-categories.ts
```

### 5.2. Hook Pattern

```typescript
'use client'

import { useQuery } from '@tanstack/react-query'
import { ReactQueryOptions } from '@/types/common'
import { GetListMoviesResponse, RequestMovie } from '@/types/movie'
import { getListMovieService } from '@/services/o-phim/movies/list-movie-service'

export default function useGetListMovie(params: RequestMovie, queryOptions?: ReactQueryOptions<GetListMoviesResponse>) {
  const query = useQuery({
    queryKey: ['get-movies', JSON.stringify(params)],
    queryFn: () => getListMovieService({ ...params }),
    ...queryOptions,
    refetchOnWindowFocus: false,
  })

  return {
    data: query?.data?.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
    query,
  }
}
```

**Quy tắc Hooks:**

1. ✅ Phải có `'use client'` directive
2. ✅ Sử dụng TanStack Query (`useQuery`, `useMutation`)
3. ✅ Query key phải unique và descriptive
4. ✅ Luôn return standardized object: `{ data, isLoading, error, refetch, query }`
5. ✅ `refetchOnWindowFocus: false` mặc định
6. ✅ Accept optional `queryOptions` để customize behavior
7. ✅ Type-safe với TypeScript generics

### 5.3. Query Key Convention

- Format: `[resource-name, ...params]`
- Ví dụ:
  - `["get-movies", JSON.stringify(params)]`
  - `["get-movie-info", slug]`
  - `["get-categories", params]`

---

## 6. TypeScript Types

### 6.1. Types Structure

Types được tổ chức theo domain và mirror structure của schemas:

```
types/
├── common.ts           # Common types (BaseServiceResponse, etc.)
├── movie.ts
├── movie-category.ts
├── movie-country.ts
└── k-phim/
    ├── movie-info.ts
    └── movie-category.ts
```

### 6.2. Type Definitions

```typescript
// types/common.ts
export type BaseServiceResponse<T> = {
  data: T | null
  message: string
  success: boolean
  status?: number
}

export type ErrorResponse = {
  error: string
  error_description: string
  title?: string
  errors?: unknown[]
  traceId?: string
}

export type ReactQueryOptions<TData> = Omit<
  UseQueryOptions<unknown, ErrorResponse, BaseServiceResponse<TData>, string[]>,
  'queryKey' | 'queryFn' | 'initialData'
>
```

**Quy tắc Types:**

1. ✅ Sử dụng `type` cho unions, intersections, và mapped types
2. ✅ Sử dụng `interface` cho object shapes (có thể extend)
3. ✅ Export types từ schemas bằng `z.infer<typeof SchemaName>`
4. ✅ Naming: PascalCase
5. ✅ Generic types khi cần: `BaseServiceResponse<T>`

---

## 7. Zod Schemas (Validation)

### 7.1. Schemas Structure

Schemas được tổ chức theo domain:

```
schemas/
├── common.ts           # Common schemas (Pagination, etc.)
├── movie.ts
├── movie-category.ts
└── k-phim/
    ├── movie-info.ts
    └── movie-category.ts
```

### 7.2. Schema Pattern

```typescript
import { z } from 'zod'

// Common schemas
export const PaginationSchema = z.object({
  currentPage: z.number(),
  totalItems: z.number(),
  totalItemsPerPage: z.number(),
  totalPages: z.number().optional(),
})

// Request schema
export const RequestMovieSchema = z.object({
  slug: z.string(),
  page: z.number().optional(),
  limit: z.number().optional(),
})

// Response schema
export const MovieSchema = z.object({
  _id: z.string(),
  name: z.string(),
  slug: z.string(),
  poster_url: z.string().url(),
  // ... more fields
})
```

**Quy tắc Schemas:**

1. ✅ Naming: PascalCase + suffix `Schema`
2. ✅ Sử dụng Zod validators phù hợp (`z.string()`, `z.number()`, `z.array()`, etc.)
3. ✅ Optional fields: `.optional()` hoặc `.nullable()`
4. ✅ URLs: `.url()` validator
5. ✅ Reuse common schemas từ `schemas/common.ts`
6. ✅ Export schema để sử dụng trong services và types

### 7.3. Type Inference từ Schemas

```typescript
// Từ schema → type
export type RequestMovie = z.infer<typeof RequestMovieSchema>
export type Pagination = z.infer<typeof PaginationSchema>
```

---

## 8. Components

### 8.1. Component Structure

```
components/
├── Common/           # Shared components (Header, Footer, etc.)
├── Home/             # Feature-specific components
└── ui/               # Base UI components (from shadcn/ui)
```

### 8.2. Component Pattern

```typescript
'use client'; // Chỉ khi cần interactivity

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

interface ComponentProps {
  title: string;
  onAction?: () => void;
}

export default function Component({ title, onAction }: ComponentProps) {
  const t = useTranslations('namespace');

  return (
    <div className="container">
      <h1>{title}</h1>
      <Button onClick={onAction}>{t('action')}</Button>
    </div>
  );
}
```

**Quy tắc Components:**

1. ✅ Default export cho component
2. ✅ PascalCase cho component name
3. ✅ Type-safe props với TypeScript interface/type
4. ✅ `'use client'` chỉ khi cần interactivity (useState, useEffect, event handlers)
5. ✅ Server Components mặc định (fetch data trực tiếp)
6. ✅ Sử dụng `cn()` utility từ `@/lib/utils` cho conditional classes
7. ✅ UI components từ `@/components/ui/` (Radix UI + shadcn)

### 8.3. Styling

- ✅ Sử dụng Tailwind CSS classes
- ✅ Sử dụng `cn()` utility cho conditional classes
- ✅ Custom utilities trong `src/lib/utils.ts`
- ✅ Responsive design với Tailwind breakpoints

```typescript
import { cn } from '@/lib/utils';

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className // Allow override
)}>
```

---

## 9. Environment Variables

### 9.1. Environment Config

Tất cả environment variables được export từ `src/configs/env.ts`:

```typescript
export const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.dexspace.io'
export const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ''
```

**Quy tắc:**

1. ✅ Tất cả env vars phải có prefix `NEXT_PUBLIC_` nếu cần access từ client
2. ✅ Provide default values khi có thể
3. ✅ Export từ `@/configs/env.ts`, không dùng `process.env` trực tiếp trong components/services
4. ✅ Type-safe với TypeScript

---

## 10. Internationalization (i18n)

### 10.1. Locale Configuration

Locales được định nghĩa trong `src/i18n/routing.ts`:

```typescript
export const routing = defineRouting({
  locales: ['en', 'zh', 'es', 'fr', 'de', 'ru', 'ja', 'ko', 'vi'],
  defaultLocale: 'en',
})
```

### 10.2. Translation Files

Translation files trong `src/messages/`:

```
messages/
├── en.json
├── vi.json
├── zh.json
└── ...
```

### 10.3. Using Translations

```typescript
'use client';
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations('navbar'); // namespace

  return <h1>{t('home')}</h1>;
}
```

**Quy tắc i18n:**

1. ✅ Tất cả user-facing text phải được translate
2. ✅ Sử dụng `useTranslations` hook trong Client Components
3. ✅ Sử dụng `getTranslations` trong Server Components
4. ✅ Organize translations theo namespace trong JSON files
5. ✅ Routes tự động có locale prefix: `/en/`, `/vi/`, etc.

---

## 11. Error Handling

### 11.1. Service Level

```typescript
try {
  const response = await axiosInstance.get(...);
  return {
    data: response.data,
    message: response.statusText,
    success: true,
  };
} catch (e) {
  return e as BaseServiceResponse<T>;
}
```

### 11.2. Component Level

```typescript
const { data, error, isLoading } = useGetMovies(params);

if (isLoading) return <Skeleton />;
if (error) return <Error message={error.message} />;
if (!data) return <EmptyState />;

return <MovieList data={data} />;
```

---

## 12. Best Practices

### 12.1. Code Organization

1. ✅ **Separation of Concerns**: Services → Hooks → Components
2. ✅ **Domain-based organization**: Group by feature/domain (o-phim, k-phim)
3. ✅ **Single Responsibility**: Mỗi file/function chỉ làm một việc
4. ✅ **DRY (Don't Repeat Yourself)**: Reuse common utilities, types, schemas
5. ✅ **Type Safety**: Luôn sử dụng TypeScript types, không dùng `any` trừ khi cần thiết

### 12.2. Performance

1. ✅ **Server Components mặc định**: Chỉ dùng Client Components khi cần
2. ✅ **React Query caching**: Leverage TanStack Query caching
3. ✅ **Image optimization**: Sử dụng Next.js `Image` component
4. ✅ **Code splitting**: Next.js tự động code split theo routes

### 12.3. TypeScript

1. ✅ **Strict mode**: Luôn bật strict mode
2. ✅ **Type inference**: Ưu tiên type inference khi có thể
3. ✅ **Generic types**: Sử dụng generics cho reusable code
4. ✅ **Zod validation**: Validate runtime data với Zod schemas

### 12.4. Code Style

1. ✅ **ESLint**: Follow ESLint rules
2. ✅ **Prettier**: Format code với Prettier
3. ✅ **Import order**: Group imports (external → internal → relative)
4. ✅ **Comments**: Comment cho complex logic, JSDoc cho functions

```typescript
// ✅ Good import order
import { useQuery } from '@tanstack/react-query' // External
import { BaseServiceResponse } from '@/types/common' // Internal (@/)
import { getListMovieService } from '@/services/o-phim/movies/list-movie-service' // Internal
```

---

## 13. File Templates

### 13.1. Service Template

```typescript
import { BaseServiceResponse } from '@/types/common'
import { axiosInstance } from '@/api/axios'
import { NEXT_PUBLIC_API_URL } from '@/configs/env'
import { ResponseType } from '@/types/response'
import { RequestSchema } from '@/schemas/request'
import { RequestType } from '@/types/request'

export async function getResourceService(options: RequestType): Promise<BaseServiceResponse<ResponseType>> {
  try {
    const params = RequestSchema.parse(options)
    const response = await axiosInstance.get<ResponseType>(`${NEXT_PUBLIC_API_URL}/endpoint`, { params })
    return {
      data: response.data,
      message: response.statusText,
      success: true,
    }
  } catch (e) {
    return e as BaseServiceResponse<ResponseType>
  }
}
```

### 13.2. Hook Template

```typescript
'use client'

import { useQuery } from '@tanstack/react-query'
import { ReactQueryOptions } from '@/types/common'
import { ResponseType, RequestType } from '@/types/resource'
import { getResourceService } from '@/services/domain/resource/resource-service'

export default function useGetResource(params: RequestType, queryOptions?: ReactQueryOptions<ResponseType>) {
  const query = useQuery({
    queryKey: ['get-resource', JSON.stringify(params)],
    queryFn: () => getResourceService(params),
    ...queryOptions,
    refetchOnWindowFocus: false,
  })

  return {
    data: query?.data?.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
    query,
  }
}
```

### 13.3. Component Template

```typescript

'use client'; // Chỉ khi cần sử dụng hooks trong file

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface ComponentProps {
  className?: string;
}

export default function Component({ className }: ComponentProps) {
  const t = useTranslations('namespace');

  return (
    <div className={cn("base-classes", className)}>
      {/* Component content */}
    </div>
  );
}
```

---

## 14. Git & Version Control

### 14.1. Commit Messages

- ✅ Sử dụng conventional commits khi có thể
- ✅ Descriptive commit messages
- ✅ Format: `type(scope): description`

### 14.2. Branching

- ✅ Main branch: `main` hoặc `master`
- ✅ Feature branches: `feature/feature-name`
- ✅ Bug fixes: `fix/bug-name`

---

## 15. Testing (Tùy chọn - Nếu có)

1. ✅ Unit tests cho utilities và services
2. ✅ Integration tests cho hooks
3. ✅ Component tests cho UI components
4. ✅ E2E tests cho critical flows

---

## Tóm Tắt Checklist

Khi tạo một feature mới, đảm bảo:

- [ ] **Service**: Tạo service function trong `services/{domain}/{feature}/{feature}-service.ts`
- [ ] **Schema**: Tạo Zod schema trong `schemas/{feature}.ts` (nếu cần)
- [ ] **Types**: Tạo TypeScript types trong `types/{feature}.ts`
- [ ] **Hook**: Tạo custom hook trong `hooks/{domain}/{feature}/use-get-{feature}.ts`
- [ ] **Component**: Tạo component trong `components/{feature}/` hoặc `components/Common/`
- [ ] **Route**: Tạo route trong `app/[locale]/{route}/page.tsx` (nếu cần)
- [ ] **i18n**: Thêm translations vào `messages/{locale}.json` (nếu cần)
- [ ] **Type Safety**: Đảm bảo tất cả đều type-safe
- [ ] **Error Handling**: Xử lý errors đúng cách
- [ ] **Code Style**: Tuân thủ ESLint và Prettier

---

**Lưu ý**: File này được cập nhật định kỳ. Khi có thay đổi về architecture hoặc conventions, cần cập nhật file này để đảm bảo consistency trong codebase.

color
primary: #31F4F5
secondary:#3178F5
tertiary:#31B6F5
quaternary:#50F5BF
quinary:#313AF5
senary:#83D0F5
septenary:
octonary:
nonary:
denary:
