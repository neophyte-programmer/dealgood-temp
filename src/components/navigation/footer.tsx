import { FOOTER_LINKS } from "@/lib/footer-links";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white w-full">
            <div className="container px-3 flex flex-col gap-4 py-8">
                <div className="w-full flex items-center justify-center">
                    <div className="md:max-w-[80%] lg:max-w-[70%] mx-auto w-full gap-6 grid md:grid-cols-3">
                        <div className="flex flex-col items-center  gap-2">
                            <h4 className="text-lg text-gold-200">
                                Company
                            </h4>
                            {
                                FOOTER_LINKS.company.map((item) => (
                                    <Link className="text-gold-100" key={item.href} href={item.href}>
                                        {item.label}
                                    </Link>
                                ))
                            }
                        </div>
                        <div className="flex flex-col items-center  gap-2">
                            <h4 className="text-lg text-gold-200">
                                Resources
                            </h4>
                            {
                                FOOTER_LINKS.resources.map((item) => (
                                    <Link className="text-gold-100" key={item.href} href={item.href}>
                                        {item.label}
                                    </Link>
                                ))
                            }
                        </div>
                        <div className="flex flex-col items-center  gap-2">
                            <h4 className="text-lg text-gold-200">
                                Content
                            </h4>
                            {
                                FOOTER_LINKS.content.map((item) => (
                                    <Link className="text-gold-100" key={item.href} href={item.href}>
                                        {item.label}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full border border-gold-300 " />
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center ">
                        <Link href="/">
                            <Image priority src="/logo.svg" alt="logo" width={70} height={40} className="aspect-video w-[80px] md:w-[100px] object-contain " />
                        </Link>
                        <p className="text-[#7A7A7A]">
                            <span>
                            &copy;
                            </span>
                            2023
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/images/globe.svg" alt="globe icon" width={20} height={20} />
                        <p className="text-[#7a7a7a]">
                            English | French
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}