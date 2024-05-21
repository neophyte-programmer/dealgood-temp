import TrainingDetailsCard from "@/components/cards/training-details-card";
import AbsoluteImage from "@/components/core/absolute-image";
import HeadSub from "@/components/core/head-sub";
import RelativeImage from "@/components/core/relative-image";
import { homeGallery, trainingDetails, trainingGallery } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function TrainingPage() {
    return (
        <>
            <section className="container max-md:px-1 grid grid-cols-1 md:grid-cols-2 py-4">
                <div className="flex items-center ">
                    <HeadSub
                        title="Our Products Give Satisfaction"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
                        position="left"
                    />
                </div>
                <RelativeImage
                    src="bubble-ppl.svg"
                    styles="aspect-square w-full"
                />
            </section>
            <section className="bg-[url('/images/vectors/training-bg.svg')] z-10 bg-[#3E321A] bg-no-repeat min-h-screen bg-cover bg-center flex flex-col py-8 text-center items-center justify-center gap-6">
                <HeadSub
                    title="We train to make dreams happen"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
                    white
                />
                <div className="flex flex-col max-w-4xl gap-8 mx-auto px-4 md:flex-row md:items-center">
                    {
                        trainingDetails.map((item, i) => (
                            <TrainingDetailsCard item={item} key={i} />
                        ))
                    }
                </div>
            </section>
            <section className="relative flex flex-col gap-8 w-full px-4 py-8 max-sm:aspect-[9/16] aspect-[9/13] 2xl:aspect-[9/11]">
                <AbsoluteImage
                    src="training-1.svg"
                    style="-top-[30%] w-full aspect-[1/2]"
                />

                <HeadSub
                    title="Images from training sessions"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
                    brown
                />
                <div className='w-full max-w-5xl 2xl:max-w-7xl h-full relative z-10 gap-1 md:gap-2  mx-auto grid grid-cols-6'>
                    
                    {
                        trainingGallery.map((item, i) => (
                            <div key={i} className={cn("rounded-[7px] w-full h-full col-span-4 relative", item.style)} >
                                <Image fill src={`/images${item.src}`} alt={item.alt} className='object-cover rounded-[7px]' />
                            </div>
                        ))
                    }
                </div>

        <AbsoluteImage src="home-4.svg" style="-right-[25%] md:-right-[15%] lg:-right-[5%] translate-y-[60%] md:translate-y-[30%] bottom-10 aspect-[9/16] w-[200px] md:w-[320px] "  />
                

            </section>
        </>
    )
}