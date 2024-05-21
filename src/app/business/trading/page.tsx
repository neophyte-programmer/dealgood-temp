import ProductCard from "@/components/cards/product-card";
import AbsoluteImage from "@/components/core/absolute-image";
import HeadSub from "@/components/core/head-sub";
import RelativeImage from "@/components/core/relative-image";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import Link from "next/link";

export default function TrainingPage() {
    return (
        <>
            <section className=" relative flex flex-col gap-4 md:pt-8 max-md: md:overflow-y-hidden">
                <HeadSub
                    title="Our Products Give Satisfaction"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
                />

                <AbsoluteImage src="trading-1.svg" style="bottom-0  right-0 z-0 aspect-square w-[120%] md:w-full -translate-x-[20px]" />

                <RelativeImage
                    src="trading-food.svg"
                    styles="w-full z-10 mx-auto max-w-4xl aspect-[16/13] xl:-translate-x-[20px]"
                />

                <div className="container lg:w-[95%] py-8 max-md:p-4  bg-soil-400 md:rounded-xl gap-4 md:gap-8 relative text-white grid grid-cols-1 md:grid-cols-2 mt-10">
                    <RelativeImage
                        src="trading-grain.svg"
                        styles="rounded-xl overflow-hidden  aspect-video"
                        object="cover"
                    />
                    <div className="flex flex-col gap-4 justify-center">
                        <h2 className="font-medium text-3xl md:text-4xl  lg:text-5xl">
                            Get the best products for your business
                        </h2>
                        <p className="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa.
                        </p>
                        <Link href="/products">
                            <Button variant="white" className="w-max mt-4">
                                View Products
                            </Button>
                        </Link>

                    </div>
                </div>


            </section>

            <section className="flex flex-col gap-4 container max-md:px-4 mt-10 md:mt-16 pb-8 ">
                <div className="flex justify-between gap-8 items-center">
                    <h2 className="text-3xl md:text-4xl text-grass-500">
                        Available Products
                    </h2>
                    <Link href="/products">
                        <p className="text-grass-200/80">
                            See all
                        </p>
                    </Link>
                </div>
                <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        products.slice(0, 8).map((item, index) => (
                            <ProductCard key={index} data={item} />
                        ))
                    }
                </div>

            </section>
            <section className="relative mb-10 min-h-[40vh] lg:min-h-screen 2xl:min-h-[70vh] w-full flex items-center justify-center ">
                <AbsoluteImage src="trading-2.svg" style="left-0 top-0 w-[200px]  md:w-[500px] lg:w-[700px]  aspect-[25/28]" />
                <div className="container lg:w-[90%] grid grid-cols-1 gap-8 md:grid-cols-2">
                    <RelativeImage
                        src="trading-tractor.svg"
                        styles="rounded-xl overflow-hidden  aspect-video"
                        object="cover"
                    />
                    <div className="flex flex-col gap-4 justify-center">
                        <h2 className="font-medium text-grass-500 text-3xl md:text-4xl  lg:text-5xl">
                            Use the best equipment available for your farm
                        </h2>
                        <p className="text-grass-200/80">
                            Rent our agro-tech equipments for your farm for a period of 6months and above or buy from us with full warranties.
                        </p>
                        <Button variant="secondary" className="w-max mt-4">
                            View Products
                        </Button>
                    </div>
                </div>




            </section>
        </>
    )
}