import { cn } from "@/lib/utils"
import { ClassValue } from "clsx"

type Props = {
    containerStyle?: ClassValue
    title: string
    subtitle?: string
    position?: "right" | "center" | "left"
    reverse?: boolean
    white?: boolean
    brown?: boolean
    hideSub?: boolean
    lg?: boolean
}

export default function HeadSub({ containerStyle, title, subtitle, position, reverse, white, brown, hideSub, lg }: Props) {
    return (
        <div className={cn(
            "flex flex-col py-4 gap-4 container text-center mt-10 items-center z-20 relative",
            position === "right" && "text-right items-end",
            position === "left" && "text-left items-start",
            position === "center" && "text-center items-center ",
            reverse && "flex-col-reverse",
            containerStyle,
        )}>
            <h2 className={cn(
                "text-2xl lg:text-4xl 2xl:text-6xl font-medium text-grass-500 capitalize",
                white && "text-white",
                lg && "text-3xl lg:text-5xl 2xl:text-7xl"
            )}>
                {title}
            </h2>
            {
                !hideSub &&
                <p className={cn("text-grass-200/80 md:text-lg lg:text-xl 2xl:text-2xl max-w-3xl ", white && "text-white", brown && "text-[#c9b38b]")}>
                    {subtitle}
                </p>
            }
        </div>
    )
}