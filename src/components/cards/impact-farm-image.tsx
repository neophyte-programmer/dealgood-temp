"use client"
import { cn } from "@/lib/utils"
import { ImpactGalleryItem } from "@/types"
import Image from "next/image"
import { useHover } from 'react-use';


type Props = {
    data: ImpactGalleryItem
}

export default function ImpactFarmImage({ data }: Props) {
    const { alt, impact, src, style, title } = data

    const card = (hovered: boolean) => (
        <article style={{
            backgroundImage: `url(/images${src})`
        }} className={cn(
            "relative ",
            style
        )}>
            {
                hovered && <div className="absolute top-0 left-0 p-4 w-full h-full flex bg-white/40 items-end">
                    <div className="">
                        <p className="text-2xl font-medium">
                            {title}
                        </p>
                        <p className="">
                            {impact}
                        </p>
                    </div>
                </div>
            }
        </article>
    )

    
    const [hoverable, hovered] = useHover(card);

    return hoverable
}