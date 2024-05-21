import { Navlink } from "@/types";

export const NAVLINKS: Navlink[] = [
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Our Business",
        href: "/business",
        dropdown: [
            {
                label: "Trading",
                description: "Contains various Commodities we have on our site.",
                href: "/business/trading"
            },
            {
                label: "Training",
                description: "Training",
                href: "/business/training"
            },
            {
                label: "Production Support",
                description: "Production Support",
                href: "/business/production-support"
            },
        ]
    }, 
    {
        href: "/impact",
        label: "Impact",
    },
    {
        href: "/contact-us",
        label: "Contact Us",
    },
    {
        href: "/news",
        label: "News",
    },

]
