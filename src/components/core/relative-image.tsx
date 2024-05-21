import Image from "next/image"
import { cn } from "@/lib/utils"
import { ClassValue } from "clsx"

type Props = {
    src: string
    styles: ClassValue
    alt?: ""
    position?: "relative" | "absolute"
    object?: "cover" | "contain" | "none"
    innerStyles?: ClassValue
    priority?: boolean
}

export default function RelativeImage({ position, src, object, alt, styles, innerStyles, priority }: Props) {
    return (
        <div className={cn(
            "relative ",
            position,
            styles,
        )}>
            <Image
                src={`/images/${src}`}
                alt={alt || ""}
                fill
                priority={priority || false}
                className={cn(
                    "object-contain",
                    object === "cover" && "object-cover",
                    object === "contain" && "object-contain",
                    object === "none" && "object-none",
                    innerStyles
                )}
            />
        </div>
    )
}