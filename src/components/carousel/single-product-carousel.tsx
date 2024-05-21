"use client"
import { cn } from "@/lib/utils"
import { ControlButtonProps } from "@/types"
import Image from "next/image"
import { useState } from "react"
import ControlButton from "../core/control-button"

export default function SingleProductCarousel({ carouselImages }: { carouselImages: string[] }) {
    const [index, setIndex] = useState(0)
    const currentImage = carouselImages[index]

    const checkNumber = (num: number) => {
        if (num > carouselImages.length - 1) {
            return 0
        }
        if (num < 0) {
            return carouselImages.length - 1
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
        <article className="relative   w-full aspect-[4/3] ">
            {
                index > 0 && <ControlButton action={prev} variant="prev" />
            }

            <Image src={`/images/products/${currentImage}`} alt="" fill className="object-cover" />

            {
                index < carouselImages.length - 1 && <ControlButton action={next} variant="next" />
            }
        </article>
    )
}