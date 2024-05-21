import { News } from "@/types";
import RelativeImage from "../core/relative-image";

export default function NewsCard({ data }: { data: News }) {
    const { desc, img, subtitle, title} = data
    return (
        <article className="w-full">
            <RelativeImage
                src={img}
                styles="aspect-[3/2] w-full"
            />
            <p className="text-xs xl:text-sm">
               {subtitle}
            </p>
            <h4 className="font-semibold text-[#898989] text-lg md:text-2xl">
               {title}
            </h4>
            <p className="text-sm text-grass-200/80">
               {desc}
            </p>

        </article>
    )
}