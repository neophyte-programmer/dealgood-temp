"use client"
import { TeamMember } from "@/types";
import { useHover } from 'react-use';
import { cn } from "@/lib/utils";
import { SNAP_ALIGN_CHILD_STYLES } from "@/lib/constants";
import Image from "next/image";

export default function TeamCard({ member }: { member: TeamMember }) {
    const { img, name, position } = member

    const card = (hovered: boolean) => (
        <article style={{
            ...SNAP_ALIGN_CHILD_STYLES,
            backgroundImage: hovered ? `url(${img})` : undefined
        }} className={cn(
            "w-[300px] h-max aspect-[1/1.2] rounded-xl z-20 bg-cover p-6 bg-white transition duration-300 flex flex-col gap-4 items-center justify-center ml-8",
            hovered && "scale-110 text-white gap-2 items-start justify-end "
        )}>
            {
                hovered ? <>
                    <p className="">
                        {name}
                    </p>

                    <p className="">
                        {position}
                    </p>
                </> : <>
                    <div className="relative aspect-square rounded-full w-[150px] overflow-hidden">
                        <Image alt={name} src={img} fill className="object-cover" />
                    </div>
                    <p className="text-[#7F7F7F]">
                        {name}
                    </p>

                    <p className="text-grass-200/80">
                        {position}
                    </p>
                </>
            }
        </article>
    )

    const [hoverable, hovered] = useHover(card);

    return hoverable
}