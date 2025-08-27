import Image from "next/image"
import Tag from "./Tag"
import Link from "next/link"

export default function CardItem({ idx }: { idx?: number }) {
    return (
        <Link href={`/academy/detail/${idx}`}>
            <div className="flex flex-col gap-4">
                <div data-placeholder="true" data-ratio="16:9">
                    <Image src="/images/image.png" alt="image" width={600} height={370} className="rounded-lg object-cover w-full h-auto" />
                </div>
                <p className="text-slate-400 text-xs font-medium font-['Inter'] leading-tight">26 May · 16:10 UTC</p>
                <div className="flex flex-col gap-3">
                    <h3 className="text-white text-xl font-bold font-['Inter'] uppercase leading-loose line-clamp-2">How to trade safely on DexSpace</h3>
                    <p className="text-slate-400 text-sm font-medium font-['Inter'] leading-snug line-clamp-2">Learn the best practices for secure trading and maximizing your profits.</p>
                    <div className="flex gap-2">
                        {[1, 2, 3].map((tag) => (
                            <Tag key={tag} text="New" />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}