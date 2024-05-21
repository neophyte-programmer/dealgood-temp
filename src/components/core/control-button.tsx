import { cn } from "@/lib/utils"
import { ControlButtonProps } from "@/types"

export default function ControlButton({ action, variant, icon }: ControlButtonProps) {
    if (icon === "chevron") {
        return (
            <button className={cn(
                "absolute top-1/2 -translate-y-1/2 bg-white z-10 md:p-2 aspect-square h-[30px]  md:h-[40px] md:w-[40px] rounded-full flex items-center justify-center",
                variant === "next" ? "right-4 md:right-8" : "left-4 md:left-8"
    
            )} onClick={action} >
                {
                    variant === "prev" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ADADAD" className="w-4 h-4 -translate-x-[1px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
    
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ADADAD" className="w-4 h-4 translate-x-[1px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
    
                    )
                }
            </button>
        )
    }

    return (
        <button onClick={action} className={cn(
            " absolute  z-10 bg-white top-1/2 -translate-y-1/2  flex items-center justify-center rounded-full aspect-square p-2",
            variant === "next" ? "right-4" : "left-4"
        )} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#292D32" className="w-6 h-6  -translate-x-[2px]">
                {
                    variant === "next" ? <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" /> : <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z" clipRule="evenodd" />
                }
            </svg>
        </button>
    )
}