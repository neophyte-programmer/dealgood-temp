"use client"
import { reviews } from "@/lib/data"
import Image from "next/image"
import { useState } from "react"
import ControlButton from "../core/control-button"


export default function ReviewCarousel() {
    const [index, setIndex] = useState(0)
    const { desc, img, subtitle, title } = reviews[index]

    const checkNumber = (num: number) => {
        if (num > reviews.length - 1) {
            return 0
        }
        if (num < 0) {
            return reviews.length - 1
        }
        return num
    }
    const next = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }
    const prev = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }
    return (
        <article className="w-full z-10  container rounded-xl  ">
            <div className="relative">

                {
                    index > 0 && <ControlButton icon="chevron" action={prev} variant="prev" />
                }

                <PlayButton />

                <div className="relative w-full transition duration-300 rounded-t-xl aspect-[3/2] md:aspect-[3/1] border">
                    <Image fill src={img} alt={title} className="object-cover rounded-t-xl" />
                </div>
                {
                    index < reviews.length - 1 && <ControlButton icon="chevron" action={next} variant="next" />
                }
            </div>
            <div className="bg-[#FFEFCE] p-6 flex flex-col rounded-b-xl gap-4 md:p-8">
                <p className="text-lg text-grass-500">
                    {title} | <span className="text-base text-grass-200/80">{subtitle}</span>
                </p>
                <p className="pb-4 text-[#3B3B3B]">
                    {desc}
                </p>

            </div>
        </article>
    )
}




function PlayButton() {
    return (
        <button className="absolute h-[50px] w-[50px] p-2 rounded-full flex items-center justify-center z-10 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ADADAD" className="translate-x-[2px] w-6 h-6">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>

        </button>
    )
}