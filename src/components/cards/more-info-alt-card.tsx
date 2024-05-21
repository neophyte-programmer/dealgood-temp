import { MoreInfoAlt } from "@/types";
import Image from "next/image";

export default function MoreInfoAltCard({ data }: { data: MoreInfoAlt }) {
    const {img, companies } = data
    
    return (
        <article className="bg-[#6C775D] text-white aspect-square h-[400px] overflow-hidden flex  justify-between  rounded-[7px]" style={{
            scrollSnapAlign: 'start',
            flex: '0 0 auto',
        }}>

            <div className="relative w-[45%] h-full">
                <Image src={img} alt="" fill className="object-cover" />
            </div>  
            <div className="flex flex-col w-[55%] gap-8 justify-betwee px-4 py-6">
                {
                    companies.map((company, i) => (
                        <p key={i} className="font-semibold text-lg">
                            {company}
                        </p>
                    ))
                }
            </div>
           
                    

        </article>
    )
}