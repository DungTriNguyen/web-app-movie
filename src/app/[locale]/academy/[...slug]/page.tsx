import ArticleDetail from "@/components/Articles/ArticleDetail";
import { generateSeoMetadata } from "@/lib/seo";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: Promise<{ slug: string[] }>
}

export default async function Page({ params }: Props) {
    const { slug } = await params
    return <ArticleDetail params={{ slug }} />
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const { slug } = await params
    const id = slug?.[slug.length - 1]
    return generateSeoMetadata(id, parent)
}