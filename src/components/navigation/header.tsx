import Link from "next/link";
import Image from "next/image";
import DefaultNav from "./default-nav";
import MobileNav from "./mobile-nav";

export default function Header() {
    return (
        <header className="bg-soil-100 md:sticky md:top-0 z-[99] py-2 w-full">
            <div className="container px-2 sm:px-4 w-full flex items-center justify-between">
                <Link href="/">
                    <Image priority src="/logo.svg" alt="logo" width={80} height={40} className="aspect-video w-[80px] md:w-[100px] object-contain " />
                </Link>
                <DefaultNav />
                <MobileNav />
            </div>
        </header>
    )
}