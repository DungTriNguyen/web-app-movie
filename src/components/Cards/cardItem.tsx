import Image from "next/image"
import Link from "next/link"
import { formatDate } from "date-fns";
import Tag from "../Common/Tag";

type CardItemProps = {
    blogs?: any[];
}

export default function CardItem({ blogs }: CardItemProps) {
    const imageUrl = blogs?.[0]?.images?.[0]?.origin;
    return (
        <Link href={`/academy/${blogs?.[0]?.itemUrl}`}>
            <div className="flex flex-col gap-4 md:min-h-[200px]">
                <div
                    className="w-full relative aspect-[16/9] rounded-lg overflow-hidden"
                    data-placeholder="true" data-ratio="16:9"
                >
                    <Image src={imageUrl || "/images/image.png"} alt={blogs?.[0]?.title || ""} width={600} height={270} className="object-cover w-full" unoptimized />
                </div>
                <p className="text-slate-400 text-xs font-medium font-['Inter'] leading-tight">
                    {blogs?.[0]?.createdDate ? formatDate(new Date(blogs[0].createdDate), "dd MMM · HH:mm 'UTC'") : ""}
                </p>
                <div className="flex flex-col gap-3">
                    <h3 className="text-white text-xl font-bold font-['Inter'] uppercase leading-loose line-clamp-2">{blogs?.[0]?.title}</h3>
                    <p className="text-slate-400 text-sm font-medium font-['Inter'] leading-snug line-clamp-2">{blogs?.[0]?.description}</p>
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