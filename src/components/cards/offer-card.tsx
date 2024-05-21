import { cn } from "@/lib/utils"
import { Offer } from "@/types"
import Image from "next/image"

interface Props {
    data: Offer
}

export default function OfferCard({ data }: Props) {
    const { desc, img, isCenter, title } = data
    return (
        <div className="w-full h-full bordr-4 flex items-center justify-center">
            <article className={
                cn(
                    `bg-white border-[#eee] group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer py-4  border rounded-[7px] flex flex-col items-center justify-center w-full gap-3 max-md:max-w-md`,
                    isCenter ? "md:w-[350px] w-full  md:aspect-[9/7]" : "md:w-[250px] md:aspect-[9/7]"
                )
            }>
                <div className={cn(
                    "relative aspect-square object- rounded-full  ",
                    isCenter ? "md:w-[150px] w-[100px] " : "w-[100px]"
                )}>
                <Image src={`/images${img}`} alt={title} fill className="object-" />

                </div>
                <div className="flex flex-col justify-center items-center w-full">
                    <h3 className="text-[#5D5D5D] w-[80%] text-center md:text-lg">{title}</h3>
                    <p className="hidden group-hover:block text-grass-200/80 text-sm">
                        {desc}
                    </p>
                </div>
            </article>
        </div>
    )
}