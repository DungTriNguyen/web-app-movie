import ArticleDetail from "@/components/Articles/ArticleDetail";
import { generateSeoMetadata } from "@/lib/seo";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: Promise<{ slug: string[], locale: string }>
}

export default async function Page({ params }: Props) {
    const { slug, locale } = await params
    return <ArticleDetail params={{ slug, locale }} />
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const { slug, locale } = await params
    const id = slug?.[slug.length - 1]
    return generateSeoMetadata(id, parent, locale)
}