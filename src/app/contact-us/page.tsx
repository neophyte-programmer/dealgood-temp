import HeadSub from "@/components/core/head-sub";
import ContactForm from "@/components/forms/contact-form";
import { socialLinks } from "@/lib/data";
import Link from "next/link";

export default function ContactPage() {
    return (
        <>
            <div className="max-w-6xl mx-auto w-full">

                <HeadSub
                    position="left"
                    title="Contact Us"
                    subtitle="Reach out to us on our socials:"
                />
            </div>
            <section className=" flex flex-col gap-4 mb-10  container max-w-6xl  ">
                <ContactForm />
                <div className="w-full grid  gap-6 grid-cols-4  md:p-4">
                    {
                        socialLinks.map((item, index) => (
                            <Link className="aspect-square w-full border-[#ACACAC] text-[#ACACAC] rounded-xl hover:border-soil-300 hover:text-soil-300 border flex flex-col items-center justify-center" href={item.link} key={index}>
                                <item.icon className="text-2xl md:text-4xl" />
                                <p className="max-md:hidden">
                                    {item.social}
                                </p>
                            </Link>
                        ))
                    }
                </div>
            </section>
           
        </>
    )
}