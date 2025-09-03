import InteractionBar from "../Common/InteractionBar";
import Image from "next/image";
import RelatedArticle from "./RelatedArticle";

type Props = {
    blog: any,
    content: any
}

export default function ArticleContent({ blog, content }: Props) {
    return (
        <div className="px-0 md:px-20 pt-10 pb-10 md:pb-20">
            <div className="max-w-[720px] mx-auto px-4 mb-10 md:mb-12">
                <div className="flex flex-col gap-6">
                    <InteractionBar />
                    <div data-placeholder="true" data-ratio="16:9" className="w-full self-stretch aspect-[16/9] rounded-lg inline-flex flex-col justify-start items-start overflow-hidden">
                        <Image src={blog?.images?.[0]?.origin || "/images/image.png"} alt={blog?.title || "Article Placeholder"} width={720} height={405} className="object-cover" />
                    </div>
                    <div className="self-stretch px-12 inline-flex justify-center items-center gap-6">
                        <div className="w-0.5 self-stretch bg-purple-600" />
                        <div className="flex-1 justify-start text-slate-400 text-base font-normal font-['Inter'] leading-relaxed">{blog?.description}</div>
                    </div>
                    <div className="max-w-3xl mx-auto text-sm md:text-xl text-white prose prose-lg font-normal font-['Inter'] leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: content?.content || '' }}
                    />
                    <div className="px-3 py-12">
                        <InteractionBar />
                    </div>
                </div>
            </div>
            <RelatedArticle />
        </div>
    );
}