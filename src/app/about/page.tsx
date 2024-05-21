import TeamCard from "@/components/cards/team-card";
import AbsoluteImage from "@/components/core/absolute-image";
import HeadSub from "@/components/core/head-sub";
import RelativeImage from "@/components/core/relative-image";
import { Button } from "@/components/ui/button";
import { partners, team } from "@/lib/data";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <section className="bg-[url('/images/aboutbg.svg')] min-h-screen h-full flex flex-col items-center justify-center gap bg-right-top relative md:bg-center bg-cover bg-no-repeat w-full">

                <div className="py-8 container absolute flex items-center justify-center text-grass-500 text-4xl lg:text-5xl 2xl:text-8xl font-semibold h-1/2 top-0">
                    <h1>
                        About Us
                    </h1>
                </div>
                <div className="flex flex-col py-4 gap-4 container mt-10 ">
                    <h2 className="text-2xl lg:text-4xl 2xl:text-6xl font-medium text-grass-500 ">Our Mission</h2>
                    <p className="text-grass-200/80 text-lg lg:text-xl 2xl:text-2xl ">
                        To spearhead the revolution from subsistence farming to <br /> agricultural business in Africa.
                    </p>
                </div>

            </section>
            <section className="relative py-8 ">
                <AbsoluteImage src="about-leaf.svg" style="md:-top-[15%] right-0 w-[100px] md:w-[300px] aspect-[1/1.57] z-10" />
                <div className="relative container flex flex-col gap-4 items-center justify-center">
                    <h1 className="text-2xl lg:text-4xl 2xl:text-6xl font-medium text-grass-500 ">
                        How we started
                    </h1>
                    <div className="relative w-full md:w-[90%] group hover:cursor-pointer transition aspect-[1/2.21]  md:aspect-[2.21/1] rounded-3xl overflow-hidden">
                        <Image src="/images/tractor.svg" alt="" fill className="object-cover max-md:object-left" />
                        <div className="absolute p-8  items-center justify-center  md:hidden md:group-hover:flex transition duration-300 w-full h-full top-0 bg-[#4E4E4E]/40 group-hover:bg-[#4E4E4E]/70 text-white">
                            <p className="text-center text-lg">
                                Agriculture in Africa is mainly championed by smallholder farmers who often engage in subsistence and micro-commercial farming. These farmers are often at the mercy of the weather and changing climate, they do not have access to modern farming technology, they do not have access to credible off-takers, and they lack funding to increase production because they are not part of the formal financial ecosystem.
                                <br /> <br />
                                Dealgod Agri-Tech was set up to confront these challenges by providing end-to-end modern agricultural solutions to smallholder farmers with the intention of lifting them out of poverty and empowering them to succeed in our ever-changing world. We create value at multiple points in the value chain by working hand in glove with farmers from production to sale of produce
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <HeadSub
                title="Our Vision"
                subtitle="Convert smallholder producers into mini-commercial farmers by providing end-to-end agribusiness solutions."
            />

            <section className="bg-[url('/images/vectors/about-1.svg')] max-md:px-4 min-h-screen h-full flex flex-col items-center py-8 md:py-12 gap bg-right-top relative md:bg-top bg-cover bg-no-repeat w-full">
                <HeadSub
                    title="Business Solutions"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
                />
                <RelativeImage
                    styles="w-full md:w-[90%] group hover:cursor-pointer transition aspect-square rounded-3xl overflow-hidden"
                    src="solutions.svg"
                />
                

            </section>

            <section className="flex flex-col gap-6 relative ">
                <AbsoluteImage src="home-9.png" style="top-0 right-0 z-10 aspect-[1/4] w-[100px] md:w-[150px]" />

                <HeadSub
                    subtitle="Dealgood Management"
                    title="Meet The Team"
                    reverse
                    position="left"
                />
                <div className="flex items-center  container w-full  min-h-[500px] mx-auto overflow-x-auto justify-start hide-scrollbar scroll-smooth" style={{
                    scrollSnapType: 'x mandatory',
                }}>
                    {
                        team.map((item, i) => (
                            <TeamCard member={item} key={i} />
                        ))
                    }


                </div>

            </section>
            <section className="flex items-center justify-center min-h-[40vh] md:min-h-[90vh] relative">
                <AbsoluteImage src="about-2.svg" style="top-0 -right-[22%] md:-right-[12%] z-10 aspect-square w-[300px] md:w-[550px]" />
                <AbsoluteImage src="about-3.svg" style="bottom-0 -left-[22%] md:-left-[12%] z-10 aspect-[1/1.2] w-[200px] md:w-[350px]" />
                <div className="flex flex-col z-10 items-center justify-center gap-4 text-center container px-4 md:px-8 max-w-4xl  ">
                    <h3 className="text-2xl md:text-4xl text-grass-200">
                        Meet our Partners
                    </h3>
                    <div className="w-full grid grid-cols-4 max-md:px-4">
                        {
                            partners.map((item, i) => (
                                <div key={i} className="relative aspect-video w-full">
                                    <Image src={item} alt="" fill />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="container mb-10  w-full lg:w-[90%] grid grid-cols-1 gap-8 md:grid-cols-2">
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

                <RelativeImage
                    src="about-eq.svg"
                    styles="rounded-xl overflow-hidden  aspect-video"
                    object="cover"
                />

            </section>

        </>
    )
}