import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-[70vh] flex items-center justify-center flex-col gap-4 text-grass-500">
            <p>
                Oops!
            </p>
            <p className="text-2xl md:text-3xl">It seems this page does not exist</p>
            <Link href="/">
                <Button>
                    Back Home
                </Button>
            </Link>
        </section>
    )
}