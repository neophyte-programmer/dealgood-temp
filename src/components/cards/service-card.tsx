import { Service } from "@/types";
import RelativeImage from "../core/relative-image";

export default function ServiceCard({ desc, img, title }: Service) {
    return (
        <article className="aspect-square bg-[#F8F8F8] rounded-tl-[80px] rounded-bl-[170px] rounded-br-[80px] rounded-tr-[170px] flex items-center justify-center flex-col text-sm text-grass-200/80">
            <RelativeImage
                src={img}
                styles="aspect-square w-[150px]"
            />
            <h4 className="font-medium text-[#8E8E8E] ">
                {title}
            </h4>
            <p>
                {desc}
            </p>
        </article>
    )
}