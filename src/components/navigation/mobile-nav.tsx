import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronDown, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { NAVLINKS } from "@/lib/navlinks"
import { APP_NAME } from "@/lib/constants"

export default function MobileNav() {
    return (
        <nav className="md:hidden  ">
            <Sheet >
                <SheetTrigger asChild>
                    <button className="mr-3" >
                        <Menu />
                    </button>
                </SheetTrigger>
                <SheetContent className="w-full h-full overflow-y-scroll z-[9999]">
                    <SheetHeader>

                        <SheetClose
                            className="flex h-full w-full select-none flex-col justify-center items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none "
                        >
                            <Image src="/logo.svg" alt="logo" width={150} height={40} className="aspect-video object-contain mx-auto" />
                            <div className="mb-2 mt-4 text-lg text-center font-medium">
                                {APP_NAME}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                                We spearhead the revolution from subsistence farming to agricultural business in Africa.
                            </p>
                        </SheetClose>
                    </SheetHeader>
                    <div className="flex flex-col w-full  overflow items-start gap-4 mt-8 text-left py-4">
                        {
                            NAVLINKS.map((item) => (
                                <div key={item.href} className="w-full">
                                    {
                                        !!item.dropdown ? <div className="flex flex-col text-neutral-700 gap-3 w-full">
                                            <div className="flex w-full gap-4 justify-between items-center border-b pb-2">
                                                <p className="text-lg">
                                                    {item.label}
                                                </p>
                                                <ChevronDown />
                                            </div>
                                            <div className="pl-4 flex flex-col gap-2">
                                                {
                                                    item.dropdown.map((drop) => (
                                                        <SheetClose asChild key={drop.href}>
                                                            <Link href={drop.href}>
                                                                <div className="flex flex-col items- text-neutral-700 gap-2 py-2">
                                                                    <p className="text-base">
                                                                        {drop.label}
                                                                    </p>
                                                                    <p className="text-sm text-[#6a6a6a]">
                                                                        {drop.description}
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        </SheetClose>
                                                    ))
                                                }
                                            </div>
                                        </div> :
                                            <SheetClose asChild key={item.href}>
                                                <Link href={item.href}>
                                                    <div className="flex items-center text-neutral-700 gap-2 py-2">
                                                        <p className="text-lg">  {item.label}</p>
                                                    </div>
                                                </Link>
                                            </SheetClose>
                                    }
                                </div>
                            ))
                        }


                    </div>
                    <SheetFooter>

                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </nav>
    )
}