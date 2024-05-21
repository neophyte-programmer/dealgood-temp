"use client"
import { moreInfoAltData, moreInfoData } from "@/lib/data";
import MoreInfoCard from "../cards/more-info-card";
import { useRef, useState } from "react"
import { ControlButtonProps } from "@/types";
import { cn } from "@/lib/utils";
import MoreInfoAltCard from "../cards/more-info-alt-card";
import ControlButton from "../core/control-button";

export default function MoreInfoCarousel() {
    const [showRightIcon, setShowRightIcon] = useState(true)
    const [showLeftIcon, setShowLeftIcon] = useState(false)

    const scrollRef = useRef<any | null>()

    const scroll = (direction: "left" | "right") => {
        const { current } = scrollRef

        if (!current) return

        const scrollableWidth = current.scrollWidth - current.clientWidth;

        if (direction === 'left' && current.scrollLeft > 0) {
            current.scrollLeft -= 300
        } else if (direction === "right" && current.scrollLeft < scrollableWidth) {
            current.scrollLeft += 300
        }

        setShowLeftIcon(current.scrollLeft > 0);
        setShowRightIcon(current.scrollLeft < scrollableWidth);
    }

    return (
        <div className="relative w-full ">

            {
                showLeftIcon &&  <ControlButton action={() => scroll("left")} variant="prev" />
            }
            {
                showRightIcon &&
                <ControlButton action={() => scroll("right")} variant="next" />
            }
            <div className="flex gap-8  max-w-full mx-auto overflow-x-auto justify-start hide-scrollbar scroll-smooth" style={{
                scrollSnapType: 'x mandatory',
            }} ref={scrollRef}>

                {
                    moreInfoData.map((data, index) => (
                        <MoreInfoCard data={data} key={index} />
                    ))
                }
                {
                    moreInfoAltData.map((data, index) => (
                        <MoreInfoAltCard data={data} key={index} />
                    ))
                }
                
            </div>

        </div>
    )
}



