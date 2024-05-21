import { slug } from "@/lib/utils";
import { Product } from "@/types";
import RelativeImage from "../core/relative-image";
import Link from "next/link";

export default function ProductCard({ data }: { data: Product }) {
    const { thumbnail, category, desc, name } = data
    const href = slug(name)

    return (
        <article className="bg-white rounded-lg border p-4 flex flex-col gap-4">
            <RelativeImage src={`products/${thumbnail}`} styles="w-full aspect-video overflow-hidden rounded-lg" object="cover" />
            <div className="flex flex-col gap-2">
                <div className="w-full flex items-center justify-between">
                    <p className="lg:text-lg">
                        {name}
                    </p>
                </div>
                <p className="text-xs text-grass-200/70">
                    {desc}
                </p>

                <Link className="rounded-full border-gold-500 text-gold-500 border text-xs w-max px-2 py-1" href={`/products/${href}`} >
                    View more
                </Link>
            </div>
            
        </article>
    )
}