import ImpactFarmImage from "@/components/cards/impact-farm-image";
import SDGCard from "@/components/cards/sdg-card";
import AbsoluteImage from "@/components/core/absolute-image";
import HeadSub from "@/components/core/head-sub";
import RelativeImage from "@/components/core/relative-image";
import { impactEventsGallery, impactFarmingGallery, impactHeroImages, sdgs } from "@/lib/data";
import Image from "next/image";

export default function ImpactPage() {
    return (
        <>
            <section className="relative min-h-scree mb-16">
                <AbsoluteImage
                    src="impact-2.svg"
                    style="aspect-[9/16] w-[200px] top-0  -right-[40px] md:-right-2"
                />
                <AbsoluteImage
                    src="impact-1.svg"
                    style="aspect-square w-[200px] md:w-[500px]  md:top-4 -left-2"
                />
                <AbsoluteImage
                    src="impact-3.svg"
                    style="aspect-[.32/1] w-[200px] bottom-0 -right-2"
                />
                <HeadSub
                    title="Our Impact"
                    hideSub
                    lg
                />
                <div className="relative  mx-auto max-w-4xl w-full grid md:grid-cols-2 gap-4 px-4">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                        <p className="w-full md:text-left text-center md:text-lg lg:text-xl text-[#757575]">
                        At Dealgood Agri-Tech Limited we are consciously committed to contributing to the achievement of the Sustainable Development Goals.
                        </p>
                        <RelativeImage src="sdg-emblem.svg" styles="w-[80%] aspect-[16/4] mx-auto md:mr-auto" />
                    </div>
                    <RelativeImage
                        src="carrying-buckets.svg"
                        styles="aspect-square w-full"
                    />
                </div>

                <div className="max-w-3xl mx-auto grid grid-cols-5 gap-2 md:gap-8 px-2">
                    {
                        impactHeroImages.map((item, index) => (
                            <div key={index} className="relative aspect-square w-full rounded-lg overflow-hidden ">
                                <Image fill src={item} alt="" className="object-cover" />
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="relative min-h-screen">
                <AbsoluteImage
                    src=""
                    style=""
                />

                <div className="mx-auto max-w-4xl w-full p-4 flex flex-col gap-8 xl:gap-16">
                    {
                        sdgs.map((sdg, index) => (
                            <SDGCard sdg={sdg} position={index+1} key={index} />
                        ))
                    }
                </div>
            </section>
            <section className="mb-10">
                <HeadSub
                    title="Our Impact on Ghanaian farming"
                    hideSub
                />
                <div className="container gap-2  grid grid-cols-6 min-h-screen">
                    {
                        impactFarmingGallery.map((item, i) => (
                            <ImpactFarmImage data={item} key={i} />
                        ))
                    }
                </div>
            </section>
            <section className="mb-10 px-4 max-w-5xl mx-auto w-full">
                <HeadSub
                    position="left"
                    title="Our Impact on other events"
                    hideSub
                />
                <div className="w-full gap-2  grid grid-cols-5 min-h-screen">
                    {
                        impactEventsGallery.map((item, i) => (
                            <ImpactFarmImage data={item} key={i} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}