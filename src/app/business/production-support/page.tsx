import ServiceCard from "@/components/cards/service-card";
import HeadSub from "@/components/core/head-sub";
import RelativeImage from "@/components/core/relative-image";
import { productionSupportGallery, servicePackages } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ProductionSupportPage() {
    return (
        <>
            <section className="p-4 overflow-x-hidden mb-8 ">
                <HeadSub
                    title="Production Support"
                    lg
                />
                <RelativeImage
                    src="production-home.svg"
                    styles="aspect-[2/1.5] mx-auto max-w-2xl w-full -translate-x-4"
                />
            </section>
            <section className="container flex flex-col gap-4 items-center justify-center mt-10">
                <HeadSub
                    title="Our Products Give Satisfaction"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
                />
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl w-full">
                    {
                        servicePackages.map((service, index) => (
                            <ServiceCard {...service} key={index} />
                        ))
}
                </div>
            </section>
            <section className="mt-10">
            <div className='w-full max-w-5xl 2xl:max-w-7xl h-full aspect-[9/13] md:aspect-[9/12] px-4 relative z-10 gap-1 md:gap-2  mx-auto grid grid-cols-6'>
                    
                    {
                        productionSupportGallery.map((item, i) => (
                            <div key={i} className={cn("rounded-[7px] w-full h-full col-span-4 relative", item.style)} >
                                <Image fill src={`/images${item.src}`} alt={item.alt} className='object-cover rounded-[7px]' />
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}