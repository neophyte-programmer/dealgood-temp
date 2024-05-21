"use client"
import { TrainingDetail } from "@/types";
import { useHover } from 'react-use';
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";

export default function TrainingDetailsCard({ item }: { item: TrainingDetail }) {
    const { bg, desc, subtitle, title } = item

    const card = (hovered: boolean) => (
        <article style={{
            backgroundImage: hovered ? undefined : `url(${bg})`
        }} className={cn(
            " w-[350px] aspect-[1/1.3] flex flex-col transition p-6 bg-cover rounded-xl bg-white",
            hovered ? "justify-between text-left" : "justify-end text-left text-white"
        )}>
            {
                hovered ? <>
                    <div className="flex flex-col">
                        <p className="text-black text-2xl">
                            {title}
                        </p>
                        <p className="text-grass-200/80">
                            {desc}
                        </p>

                    </div>
                    <Button variant="secondary" className="w-max bg-[#463615]">
                        View Product
                    </Button>
                </> : <>
                    <p className="font-semibold text-xl">
                        {title}
                    </p>
                    <p>
                        {subtitle}
                    </p>
                </>
            }

        </article>
    )

    const [hoverable, hovered] = useHover(card);

    return hoverable
}