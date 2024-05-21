import ProductCard from "@/components/cards/product-card";
import AbsoluteImage from "@/components/core/absolute-image";
import RelativeImage from "@/components/core/relative-image";
import { products } from "@/lib/data";

export default function ProductsPage() {
    return (
        <>
            <section className="min-h-screen py-4 relative w-full flex flex-col-reverse md:items-center md:flex-row ">

                <AbsoluteImage src="product-1.svg" style=" max-md:bottom-0 md:top-0 left-0  aspect-[9/8] w-full md:w-[55%] " />
                <div className="border- z-10 md:w-[60%] aspect-[9/8] flex flex-col gap- py-8">
                    <div className="md:w-max max-md:flex-col max-md:text-center md:ml-auto flex items-center z-10 ">
                        <RelativeImage
                            src="arrivals1.svg"
                            styles="aspect-video w-[70%] mx-auto md:w-[450px] 2xl:w-[550px]"
                        />
                        <div className="flex flex-col gap-">
                            <p className="text-lg font-medium">
                                Name
                            </p>
                            <p className="text-[#858585]">
                                Use on the farm
                            </p>
                        </div>
                    </div>
                    <div className="md:w-max max-md:flex-col max-md:text-center md:mr-auto md:-translate-y-10 flex items-center z-10 ">
                        <RelativeImage
                            src="arrivals2.svg"
                            styles="aspect-[11/8] w-[70%] mx-auto md:w-[350px] 2xl:w-[450px]"
                        />
                        <div className="flex flex-col gap-">
                            <p className="text-lg font-medium">
                                Name
                            </p>
                            <p className="text-[#858585]">
                                Use on the farm
                            </p>
                        </div>
                    </div>
                    <div className="md:w-max max-md:flex-col max-md:text-center md:mx-auto flex items-center z-10 ">
                        <RelativeImage
                            src="arrivals3.svg"
                            styles="aspect-video md:aspect-[11/8] w-[70%] mx-auto md:w-[350px] 2xl:w-[450px]"
                        />
                        <div className="flex flex-col gap-">
                            <p className="text-lg font-medium">
                                Name
                            </p>
                            <p className="text-[#858585]">
                                Use on the farm
                            </p>
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl md:-translate-x-10 max-md:text-center md:text-6xl lg:text-7xl xl:text-8xl font-medium">
                    New Arrivals
                </h1>

            </section>
            <section className="flex flex-col gap-4 container py-10">
                <h3 className="text-3xl md:text-4xl">
                    Products
                </h3>
                <h5 className="text-xl md:text-2xl text-[#6f6f6f]">
                    Categories
                </h5>
                <div className="hide-scrollbar flex items-center gap-4 w-full overflow-x-auto ">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <article className="text-sm px-8 py-3 rounded-full bg-neutral-200 text-neutral-700" key={item}>
                            <p>
                                Categories
                            </p>
                        </article>
                    ))}

                </div>
                <div className="flex flex-col mt-8 gap-4">
                    <h3 className="text-2xl">
                        Available Seeds
                    </h3>
                    <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                            products.filter((prod) => prod.category === "seeds").map((item, index) => (
                                <ProductCard key={index} data={item} />
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col mt-8 gap-4">
                    <h3 className="text-2xl">
                        Available Seedlings
                    </h3>
                    <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                            products.filter((prod) => prod.category === "seedling").map((item, index) => (
                                <ProductCard key={index} data={item} />
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col mt-8 gap-4">
                    <h3 className="text-2xl">
                        Available Products
                    </h3>
                    <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                            products.filter((prod) => prod.category === "product").map((item, index) => (
                                <ProductCard key={index} data={item} />
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col mt-8 gap-4">
                    <h3 className="text-2xl">
                        Available Tech
                    </h3>
                    <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                            products.filter((prod) => prod.category === "tech").map((item, index) => (
                                <ProductCard key={index} data={item} />
                            ))
                        }
                    </div>
                </div>

            </section>
        </>
    )
}