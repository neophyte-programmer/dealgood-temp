"use client"
import { useHover } from 'react-use';
import { cn, isEven } from "@/lib/utils"
import { SDG } from "@/types"
import RelativeImage from '../core/relative-image';
import Image from 'next/image';

type Props = {
    sdg: SDG
    position: number
}


export default function SDGCard({ sdg, position }: Props) {
    const { desc, hoverImg, img, points, title } = sdg
    const even = isEven(position)

    const card = (hovered: boolean) => (
        <div className='w-full md:w-[40%] aspect-square rounded-lg overflow-hidden'>
            {/* eslint-disable-next-line */}
            <img className='w-full h-full object-cover' alt={title} src={hovered ? hoverImg : img} />
        </div>
    )


    const [hoverable, hovered] = useHover(card);

    return (
        <article className={cn(
            "flex flex-col items-center w-full gap-y-4 gap-x-[10%] justify-between ",
            !even ? "md:flex-row" : "md:flex-row-reverse"
        )}>
            {hoverable}
            <div className='flex flex-col gap-3  w-full md:w-[50%]'>
                <h1 className='text-2xl md:text-4xl font-medium'>
                    {title}
                </h1>
                <p className='text-grass-200/80'>
                    {desc}
                </p>
                <div className='flex items-center justify-between  gap-x-8'>
                    {
                        points.map((item, i) => (
                            <div className='flex flex-col items-center gap-2 justify-center w-full max-w-md' key={i}>
                                <div className='relative aspect-square mx-auto w-[90%]'>
                                    <Image src={item.img} alt={item.text} fill />
                                </div>
                                <p>
                                    {item.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </article>
    )
}