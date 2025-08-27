import InteractionBar from "../InteractionBar";
import Image from "next/image";
import RelatedArticle from "./RelatedArticle";

export default function ArticleContent() {
    return (
        <div className="px-0 md:px-20 pt-10 pb-10 md:pb-20">
            <div className="max-w-[720px] mx-auto px-4 mb-10 md:mb-12">
                <div className="flex flex-col gap-6">
                    <InteractionBar />
                    <div data-placeholder="true" data-ratio="16:9" className="self-stretch rounded-lg inline-flex flex-col justify-start items-start overflow-hidden">
                        <Image src="/images/image.png" alt="Article Placeholder" width={720} height={405} className="w-full h-auto object-cover" />
                    </div>
                    <div className="self-stretch px-12 inline-flex justify-center items-center gap-6">
                        <div className="w-0.5 self-stretch bg-purple-600" />
                        <div className="flex-1 justify-start text-slate-400 text-base font-normal font-['Inter'] leading-relaxed">Dive into the mechanics of liquidity pools and how LPs earn rewards.</div>
                    </div>
                    <div className="self-stretch justify-start text-white text-base font-semibold font-['Inter'] uppercase leading-normal">Why DeFi Matters</div>
                    <div className="self-stretch justify-start text-slate-400 text-sm font-medium font-['Inter'] leading-snug">
                        <div className="flex items-center gap-2">
                            <p className="text-4xl">·</p> No intermediaries
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-4xl">·</p> Open & permissionless
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-4xl">·</p> Programmable financial services
                        </div>
                    </div>
                    <div className="self-stretch justify-start text-white text-base font-semibold font-['Inter'] uppercase leading-normal">Key Use Cases</div>
                    <div className="self-stretch justify-start text-slate-400 text-sm font-medium font-['Inter'] leading-snug">
                        <div className="flex items-center gap-2">
                            <p className="text-4xl">·</p> Lending/Borrowing
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-4xl">·</p> Yield Farming
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-4xl">·</p> Decentralized Exchanges (DEXs)
                        </div>
                    </div>
                    <div className="self-stretch justify-start text-white text-base font-semibold font-['Inter'] uppercase leading-normal">Risks</div>
                    <div className="self-stretch justify-start text-slate-400 text-sm font-medium font-['Inter'] leading-snug">
                        <div className="flex items-center gap-2">
                            <p className="text-4xl">·</p> Smart contract vulnerabilities
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-4xl">·</p> Impermanent loss
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-4xl">·</p> Rug pulls
                        </div>
                    </div>
                    <div className="self-stretch justify-start text-white text-base font-semibold font-['Inter'] uppercase leading-normal">Final Thoughts</div>
                    <div className="self-stretch justify-start text-slate-400 text-sm font-medium font-['Inter'] leading-snug">As DeFi continues to evolve...</div>
                    <div className="px-3 py-12">
                        <InteractionBar />
                    </div>
                </div>
            </div>
            <RelatedArticle />
        </div>
    );
}