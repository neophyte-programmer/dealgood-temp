import { cn } from "@/lib/utils"
import { ClassValue } from "clsx"
import Image from "next/image"

type Props = {
    src: string
    alt?: string
    style: ClassValue
    object?: "contain" | "cover"
    priority?: boolean
}

export default function AbsoluteImage({src, alt, style, object, priority}: Props) {
    return (
        <div className={cn("absolute ", style)}>
            <Image priority={priority || false} fill src={`/images/vectors/${src}`} alt={alt || ""} className={cn('object-contain', object === "cover" && "object-cover")}/>
        </div>
    )
}