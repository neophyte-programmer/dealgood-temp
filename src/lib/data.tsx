import { MoreInfoAlt, News, Offer, Product, TeamMember } from "@/types";
import { SOCIAL_LINKS } from "./constants";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const offers: Offer[] = [
    {
        img: "/offers1.svg",
        isCenter: false,
        title: "Training and Support",
        desc: "What do we offer?"
    },
    {
        img: "/offers2.svg",
        isCenter: true,
        title: "Top Notch Trading",
        desc: "What do we offer?"
    },
    {
        img: "/offers3.svg",
        isCenter: false,
        title: "Business Solutions",
        desc: "What do we offer?"
    },
]

export const homeGallery = [
    {
        src: "/man-planting.svg",
        style: "col-span-5",
        alt: ""
    },
    {
        src: "/man-peppers.svg",
        style: "col-span-2",
        alt: ""
    },
    {
        src: "/green-farm.svg",
        style: "col-span-3",
        alt: ""
    },
    {
        src: "/field.svg",
        style: "col-span-3",
        alt: ""
    },
    {
        src: "/farming.svg",
        style: "col-span-2",
        alt: ""
    },
    {
        src: "/farm.svg",
        style: "col-span-5",
        alt: ""
    },
]

export const trainingGallery = [
    {
        src: "/tg1.svg",
        style: "col-span-6",
        alt: ""
    },
    {
        src: "/tg2.svg",
        style: "col-span-3",
        alt: ""
    },
    {
        src: "/tg3.svg",
        style: "col-span-3",
        alt: ""
    },
    {
        src: "/tg4.svg",
        style: "col-span-2",
        alt: ""
    },
    {
        src: "/tg5.svg",
        style: "col-span-2",
        alt: ""
    },
    {
        src: "/tg6.svg",
        style: "col-span-2",
        alt: ""
    },
    {
        src: "/tg7.svg",
        style: "col-span-6",
        alt: ""
    },
]

export const reviews = [
    {
        img: "/images/review1.svg",
        title: "Irrigation",
        subtitle: "Irrigation",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque porta feu."
    },
    {
        img: "/images/review2.svg",
        title: "Irrigation",
        subtitle: "Irrigation",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque porta feu."
    },
    {
        img: "/images/review3.svg",
        title: "Irrigation",
        subtitle: "Irrigation",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque porta feu."
    },
]

export const moreInfoData = [
    {
        company: "Company Name",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque porta feu",
        author: "Isaac Newton, Melody Kakrabah",
        results: [
            {
                title: "Farm Awards",
                desc: "Crop Growth"
            },
            {
                title: "Overall Best",
                desc: "Crop Harvest"
            },
        ]
    },
    {
        company: "Company Name",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque porta feu",
        author: "Isaac Newton, Melody Kakrabah",
        results: [
            {
                title: "40% Growth",
                desc: "Crop Growth"
            },
            {
                title: "70% Harvest",
                desc: "Crop Harvest"
            },
        ]
    },
]

export const moreInfoAltData: MoreInfoAlt[] = [
    {
        img: "/images/moreinfoalt.svg",
        companies: ["Company Name", "Company Name", "Company Name", "Company Name", "Company Name"]
    }
]

export const team: TeamMember[] = [
    {
        img: "/images/team1.svg",
        name: "Melody Kabs",
        position: "Agricultural Data Analyst"
    },
    {
        img: "/images/team2.svg",
        name: "Melody Kabs",
        position: "Agricultural Data Analyst"
    },
    {
        img: "/images/team3.svg",
        name: "Melody Kabs",
        position: "Agricultural Data Analyst"
    },
    {
        img: "/images/team4.svg",
        name: "Melody Kabs",
        position: "Agricultural Data Analyst"
    },
]

export const partners: string[] = [
    "/images/partner1.svg",
    "/images/partner2.svg",
    "/images/partner3.svg",
    "/images/partner4.svg",
]

export const productsPreview = [
    {
        name: "Cashew Kernel",
        img: 'cashew.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
    {
        name: "Soy Beans",
        img: 'soy.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
    {
        name: "Sesame Seeds",
        img: 'sesame.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
    {
        name: "Shea Nuts",
        img: 'shea.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
    {
        name: "Okro Seeds",
        img: 'okro.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
    {
        name: "Carrot Seedlings",
        img: 'carrot-seedling.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
    {
        name: "Cabbage Seeds",
        img: 'cabbage-seeds.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
    {
        name: "Drones",
        img: 'drone.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
]

export const products: Product[] = [
    {
        name: "Cashew Kernel",
        thumbnail: 'cashew.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa.",
        category: "seeds",
        images: [
            "seedling1.svg",
            "seedling2.svg",
            "seedling3.svg",
        ],
        details: {
            moisture: "9% max",
            protein: "36% min",
            foreignMatter: "3% min",
            ngmoPurity: "99.9% min",
            brokenKernels: "1% max"
        },
        model: "",
        number: ""
    },
    {
        name: "Soy Beans",
        thumbnail: 'soy.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa.",
        category: "seeds",
        images: [
            "seedling1.svg",
            "seedling2.svg",
            "seedling3.svg",
        ],
        details: {
            moisture: "9% max",
            protein: "36% min",
            foreignMatter: "3% min",
            ngmoPurity: "99.9% min",
            brokenKernels: "1% max"
        },
        model: "",
        number: ""
    },
    {
        name: "Sesame Seeds",
        thumbnail: 'sesame.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa.",
        category: "seeds",
        images: [
            "seedling1.svg",
            "seedling2.svg",
            "seedling3.svg",
        ],
        details: {
            moisture: "9% max",
            protein: "36% min",
            foreignMatter: "3% min",
            ngmoPurity: "99.9% min",
            brokenKernels: "1% max"
        },
        model: "",
        number: ""
    },
    {
        name: "Shea Nuts",
        thumbnail: 'shea.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa.",
        category: "seeds",
        images: [
            "seedling1.svg",
            "seedling2.svg",
            "seedling3.svg",
        ],
        details: {
            moisture: "9% max",
            protein: "36% min",
            foreignMatter: "3% min",
            ngmoPurity: "99.9% min",
            brokenKernels: "1% max"
        },
        model: "",
        number: ""
    },
    {
        name: "Okro Seeds",
        thumbnail: 'okro.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa.",
        category: "seeds",
        images: [
            "seedling1.svg",
            "seedling2.svg",
            "seedling3.svg",
        ],
        details: {
            moisture: "9% max",
            protein: "36% min",
            foreignMatter: "3% min",
            ngmoPurity: "99.9% min",
            brokenKernels: "1% max"
        },
        model: "",
        number: ""
    },
    {
        name: "Carrot Seedlings",
        thumbnail: 'carrot-seedling.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa.",
        category: "seedling",
        images: [
            "seedling1.svg",
            "seedling2.svg",
            "seedling3.svg",
        ],
        details: {
            moisture: "9% max",
            protein: "36% min",
            foreignMatter: "3% min",
            ngmoPurity: "99.9% min",
            brokenKernels: "1% max"
        },
        model: "",
        number: ""
    },
    {
        name: "Drones",
        thumbnail: 'drone.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa.",
        category: "tech",
        images: [
            "seedling1.svg",
            "seedling2.svg",
            "seedling3.svg",
        ],
        details: {
            moisture: "9% max",
            protein: "36% min",
            foreignMatter: "3% min",
            ngmoPurity: "99.9% min",
            brokenKernels: "1% max"
        },
        model: "",
        number: ""
    },
    {
        name: "Carrot Seeds",
        thumbnail: 'carrot-seeds.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa.",
        category: "seeds",
        images: [
            "seedling1.svg",
            "seedling2.svg",
            "seedling3.svg",
        ],
        details: {
            moisture: "9% max",
            protein: "36% min",
            foreignMatter: "3% min",
            ngmoPurity: "99.9% min",
            brokenKernels: "1% max"
        },
        model: "",
        number: ""
    },
    {
        name: "Pineapple Seeds",
        thumbnail: 'cabbage-seeds.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa.",
        category: "seeds",
        images: [
            "seedling1.svg",
            "seedling2.svg",
            "seedling3.svg",
        ],
        details: {
            moisture: "9% max",
            protein: "36% min",
            foreignMatter: "3% min",
            ngmoPurity: "99.9% min",
            brokenKernels: "1% max"
        },
        model: "",
        number: ""
    },
    {
        name: "Tomato Seeds",
        thumbnail: 'tomato-seeds.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa.",
        category: "seeds",
        images: [
            "seedling1.svg",
            "seedling2.svg",
            "seedling3.svg",
        ],
        details: {
            moisture: "9% max",
            protein: "36% min",
            foreignMatter: "3% min",
            ngmoPurity: "99.9% min",
            brokenKernels: "1% max"
        },
        model: "",
        number: ""
    },
    {
        name: "Onion Seeds",
        thumbnail: 'onion-seeds.svg',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa.",
        category: "seeds",
        images: [
            "seedling1.svg",
            "seedling2.svg",
            "seedling3.svg",
        ],
        details: {
            moisture: "9% max",
            protein: "36% min",
            foreignMatter: "3% min",
            ngmoPurity: "99.9% min",
            brokenKernels: "1% max"
        },
        model: "",
        number: ""
    },
    {
        name: "Sunrise Bliss",
        thumbnail: 'seedling1.svg',
        desc: "Vibrant and lively seedling with a burst of color, perfect for sunny gardens.",
        category: "seedling",
        images: ["seedling1.svg", "seedling2.svg", "seedling3.svg"],
        details: {
          moisture: "8% max",
          protein: "35% min",
          foreignMatter: "2% min",
          ngmoPurity: "99.5% min",
          brokenKernels: "0.5% max"
        },
        model: "SSB001",
        number: "SN001"
    },
    {
        name: "Twilight Spark",
        thumbnail: 'seedling2.svg',
        desc: "Mystical and enchanting seedling with deep hues, perfect for evening gardens.",
        category: "seedling",
        images: ["seedling1.svg", "seedling2.svg", "seedling3.svg"],
        details: {
          moisture: "7% max",
          protein: "34% min",
          foreignMatter: "1.8% min",
          ngmoPurity: "99.7% min",
          brokenKernels: "0.7% max"
        },
        model: "TS001",
        number: "SN002"
    },
    {
        name: "Tranquil Meadow",
        thumbnail: 'seedling3.svg',
        desc: "Mystical and enchanting seedling with deep hues, perfect for evening gardens.",
        category: "seedling",
        images: ["seedling1.svg", "seedling2.svg", "seedling3.svg"],
        details: {
          moisture: "7% max",
          protein: "34% min",
          foreignMatter: "1.8% min",
          ngmoPurity: "99.7% min",
          brokenKernels: "0.7% max"
        },
        model: "TS001",
        number: "SN002"
    },
    {
        name: "Lush Harmony",
        thumbnail: 'seedling4.svg',
        desc: "Mystical and enchanting seedling with deep hues, perfect for evening gardens.",
        category: "seedling",
        images: ["seedling1.svg", "seedling2.svg", "seedling3.svg"],
        details: {
          moisture: "7% max",
          protein: "34% min",
          foreignMatter: "1.8% min",
          ngmoPurity: "99.7% min",
          brokenKernels: "0.7% max"
        },
        model: "TS001",
        number: "SN002"
    },
    {
        name: "Celestial Bloom",
        thumbnail: 'seedling5.svg',
        desc: "Mystical and enchanting seedling with deep hues, perfect for evening gardens.",
        category: "seedling",
        images: ["seedling1.svg", "seedling2.svg", "seedling3.svg"],
        details: {
          moisture: "7% max",
          protein: "34% min",
          foreignMatter: "1.8% min",
          ngmoPurity: "99.7% min",
          brokenKernels: "0.7% max"
        },
        model: "TS001",
        number: "SN002"
    },
    {
        name: "Enchanting Petal",
        thumbnail: 'seedling6.svg',
        desc: "Mystical and enchanting seedling with deep hues, perfect for evening gardens.",
        category: "seedling",
        images: ["seedling1.svg", "seedling2.svg", "seedling3.svg"],
        details: {
          moisture: "7% max",
          protein: "34% min",
          foreignMatter: "1.8% min",
          ngmoPurity: "99.7% min",
          brokenKernels: "0.7% max"
        },
        model: "TS001",
        number: "SN002"
    },
    {
        name: "Ocean Breeze",
        thumbnail: 'seedling7.svg',
        desc: "Cool and refreshing seedling reminiscent of a coastal breeze.",
        category: "seedling",
        images: ["seedling1.svg", "seedling2.svg", "seedling3.svg"],
        details: {
          moisture: "6% max",
          protein: "33% min",
          foreignMatter: "1.3% min",
          ngmoPurity: "99.6% min",
          brokenKernels: "0.6% max"
        },
        model: "OB001",
        number: "SN007"
    },
      {
        name: 'Tech Item 2',
        desc: 'Description for Tech Item 2',
        category: 'tech',
        thumbnail: 'tech2.svg',
        images: [ 'tech2.svg', 'tech3.svg', 'tech4.svg' ],
        model: 'TCH2',
        number: 'TN2',
        details: {
          moisture: '2% max',
          purity: '98% min',
          ffa: '0.2% max',
          oilContent: '99% min',
          impurities: '0.4% max'
        }
      },
      {
        name: 'Tech Item 3',
        desc: 'Description for Tech Item 3',
        category: 'tech',
        thumbnail: 'tech3.svg',
        images: [ 'tech3.svg', 'tech4.svg', 'tech5.svg' ],
        model: 'TCH3',
        number: 'TN3',
        details: {
          moisture: '3% max',
          purity: '97% min',
          ffa: '0.34% max',
          oilContent: '98.5% min',
          impurities: '0.61% max'
        }
      },
      {
        name: 'Tech Item 4',
        desc: 'Description for Tech Item 4',
        category: 'tech',
        thumbnail: 'tech4.svg',
        images: [ 'tech4.svg', 'tech5.svg', 'tech6.svg' ],
        model: 'TCH4',
        number: 'TN4',
        details: {
          moisture: '4% max',
          purity: '96% min',
          ffa: '0.4% max',
          oilContent: '98% min',
          impurities: '0.8% max'
        }
      },
      {
        name: 'Tech Item 5',
        desc: 'Description for Tech Item 5',
        category: 'tech',
        thumbnail: 'tech5.svg',
        images: [ 'tech5.svg', 'tech6.svg', 'tech7.svg' ],
        model: 'TCH5',
        number: 'TN5',
        details: {
          moisture: '5% max',
          purity: '95% min',
          ffa: '0.5% max',
          oilContent: '97.5% min',
          impurities: '1% max'
        }
      },
      {
        name: 'Tech Item 6',
        desc: 'Description for Tech Item 6',
        category: 'tech',
        thumbnail: 'tech6.svg',
        images: [ 'tech6.svg', 'tech7.svg', 'tech8.svg' ],
        model: 'TCH6',
        number: 'TN6',
        details: {
          moisture: '6% max',
          purity: '94% min',
          ffa: '0.61% max',
          oilContent: '97% min',
          impurities: '1.02% max'
        }
      },
      {
        name: 'Tech Item 7',
        desc: 'Description for Tech Item 7',
        category: 'tech',
        thumbnail: 'tech7.svg',
        images: [ 'tech7.svg', 'tech8.svg', 'tech9.svg' ],
        model: 'TCH7',
        number: 'TN7',
        details: {
          moisture: '7% max',
          purity: '93% min',
          ffa: '0.71% max',
          oilContent: '96.5% min',
          impurities: '1.41% max'
        }
      },
      {
        name: 'Tech Item 8',
        desc: 'Description for Tech Item 8',
        category: 'tech',
        thumbnail: 'tech8.svg',
        images: [ 'tech8.svg', 'tech9.svg', 'tech10.svg' ],
        model: 'TCH8',
        number: 'TN8',
        details: {
          moisture: '8% max',
          purity: '92% min',
          ffa: '0.8% max',
          oilContent: '96% min',
          impurities: '1.6% max'
        }
      },
      {
        name: 'Product Item 1',
        desc: 'Description for Product Item 1',
        category: 'product',
        thumbnail: 'product1.svg',
        images: [ 'product1.svg', 'product2.svg', 'product3.svg' ],
        model: 'PRD1',
        number: 'PN1',
        details: {
          moisture: '2% max',
          purity: '97% min',
          foreignMatter: '0.5% max',
          protein: '22% min',
          ngmoPurity: '98.8% min',
          brokenKernels: '0.1% max'
        }
      },
      {
        name: 'Product Item 2',
        desc: 'Description for Product Item 2',
        category: 'product',
        thumbnail: 'product2.svg',
        images: [ 'product2.svg', 'product3.svg', 'product4.svg' ],
        model: 'PRD2',
        number: 'PN2',
        details: {
          moisture: '4% max',
          purity: '96% min',
          foreignMatter: '1% max',
          protein: '24% min',
          ngmoPurity: '98.6% min',
    brokenKernels: '0.2% max'
        }
      },
      {
        name: 'Product Item 3',
        desc: 'Description for Product Item 3',
        category: 'product',
        thumbnail: 'product3.svg',
        images: [ 'product3.svg', 'product4.svg', 'product5.svg' ],
        model: 'PRD3',
        number: 'PN3',
        details: {
          moisture: '6% max',
          purity: '95% min',
          foreignMatter: '1.5% max',
          protein: '26% min',
          ngmoPurity: '98.4% min',
          brokenKernels: '0.34% max'
        }
      },
      {
        name: 'Product Item 4',
        desc: 'Description for Product Item 4',
        category: 'product',
        thumbnail: 'product4.svg',
        images: [ 'product4.svg', 'product5.svg', 'product6.svg' ],
        model: 'PRD4',
        number: 'PN4',
        details: {
          moisture: '8% max',
          purity: '94% min',
          foreignMatter: '2% max',
          protein: '28% min',
          ngmoPurity: '98.2% min',
          brokenKernels: '0.4% max'
        }
      },
      {
        name: 'Product Item 5',
        desc: 'Description for Product Item 5',
        category: 'product',
        thumbnail: 'product5.svg',
        images: [ 'product5.svg', 'product6.svg', 'product7.svg' ],
        model: 'PRD5',
        number: 'PN5',
        details: {
          moisture: '10% max',
          purity: '93% min',
          foreignMatter: '2.5% max',
          protein: '30% min',
          ngmoPurity: '98% min',
          brokenKernels: '0.5% max'
        }
      },
      {
        name: 'Product Item 6',
        desc: 'Description for Product Item 6',
        category: 'product',
        thumbnail: 'product6.svg',
        images: [ 'product6.svg', 'product7.svg', 'product8.svg' ],
        model: 'PRD6',
        number: 'PN6',
        details: {
          moisture: '12% max',
          purity: '92% min',
          foreignMatter: '3% max',
          protein: '32% min',
          ngmoPurity: '97.8% min',
          brokenKernels: '0.61% max'
        }
      },
      {
        name: 'Product Item 7',
        desc: 'Description for Product Item 7',
        category: 'product',
        thumbnail: 'product7.svg',
        images: [ 'product7.svg', 'product8.svg', 'product9.svg' ],
        model: 'PRD7',
        number: 'PN7',
        details: {
          moisture: '14% max',
          purity: '91% min',
          foreignMatter: '3.5% max',
          protein: '34% min',
          ngmoPurity: '97.6% min',
          brokenKernels: '0.71% max'
        }
      },
      {
        name: 'Product Item 8',
        desc: 'Description for Product Item 8',
        category: 'product',
        thumbnail: 'product8.svg',
        images: [ 'product8.svg', 'product9.svg', 'product10.svg' ],
        model: 'PRD8',
        number: 'PN8',
        details: {
          moisture: '16% max',
          purity: '90% min',
          foreignMatter: '4% max',
          protein: '36% min',
          ngmoPurity: '97.4% min',
          brokenKernels: '0.8% max'
        }
      }
]

export const arrivals = [
    {
        img: "arrivals1.svg",
        name: "Name",
        use: "Use on farm"
    },
    {
        img: "arrivals2.svg",
        name: "Name",
        use: "Use on farm"
    },
    {
        img: "arrivals3.svg",
        name: "Name",
        use: "Use on farm"
    },
]

export const trainingDetails = [
    {
        bg: "/images/trainingD2.svg",
        title: "Title",
        subtitle: "Details",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
    {
        bg: "/images/trainingD1.svg",
        title: "Title",
        subtitle: "Details",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
]


export const servicePackages = [
    {
        img: "service1.svg",
        title: "Service Package",
        desc: "Service Package"
    },
    {
        img: "service2.svg",
        title: "Service Package",
        desc: "Service Package"
    },
    {
        img: "service3.svg",
        title: "Service Package",
        desc: "Service Package"
    },
]

export const productionSupportGallery = [
    {
        src: "/psg1.svg",
        style: "col-span-6 row-span-2",
        alt: ""
    },
    {
        src: "/psg2.svg",
        style: "col-span-3 row-span-2",
        alt: ""
    },
    {
        src: "/psg3.svg",
        style: "col-span-3 row-span-2",
        alt: ""
    },
    {
        src: "/psg4.svg",
        style: "col-span-2 row-span-2",
        alt: ""
    },
    {
        src: "/psg5.svg",
        style: "col-span-4 row-span-1",
        alt: ""
    },
    {
        src: "/psg6.svg",
        style: "col-span-4 row-span-1",
        alt: ""
    },
    {
        src: "/psg7.svg",
        style: "col-span-6 row-span-2",
        alt: ""
    },
]

export const impactHeroImages = [
    "/images/ih1.svg",
    "/images/ih2.svg",
    "/images/ih3.svg",
    "/images/ih4.svg",
    "/images/ih5.svg",
]

export const sdgs = [
    {
        img: "/images/sdg-goals/goal1.jpg",
        hoverImg: "/images/sdg-goals/goal1.gif",
        title: "No Poverty",
        desc: "We help smallholder farmers increase their income by increasing production and quality.",
        points: [
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
        ]
    },
    {
        img: "/images/sdg-goals/goal2.jpg",
        hoverImg: "/images/sdg-goals/goal2.gif",
        title: "Zero Hunger",
        desc: "We support food production to ensure food security.",
        points: [
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
        ]
    },
    {
        img: "/images/sdg-goals/goal4.jpg",
        hoverImg: "/images/sdg-goals/goal4.gif",
        title: "Quality Education",
        desc: "We support food production to ensure food security.",
        points: [
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
        ]
    },
    {
        img: "/images/sdg-goals/goal5.jpg",
        hoverImg: "/images/sdg-goals/goal5.gif",
        title: "Gender Equality",
        desc: "A significant number of the farmers we support and workers we employ are women",
        points: [
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
        ]
    },
    {
        img: "/images/sdg-goals/goal8.jpg",
        hoverImg: "/images/sdg-goals/goal8.gif",
        title: "Decent Work and Economic Growth",
        desc: "We provide jobs to women and youth in communities where farming is the only career option.",
        points: [
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
        ]
    },
    {
        img: "/images/sdg-goals/goal9.jpg",
        hoverImg: "/images/sdg-goals/goal9.gif",
        title: "Industry, Innovation, and Infrastructure",
        desc: "We strategically focus our production support programs on women, youth, and high-poverty communities.",
        points: [
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
        ]
    },
    {
        img: "/images/sdg-goals/goal10.jpg",
        hoverImg: "/images/sdg-goals/goal10.gif",
        title: "Reduced Inequalities",
        desc: "We strategically focus our production support programs on women, youth, and high-poverty communities.",
        points: [
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
        ]
    },
    {
        img: "/images/sdg-goals/goal12.jpg",
        hoverImg: "/images/sdg-goals/goal12.gif",
        title: "Responsible consumption and production",
        desc: "Our end-to-end solution enables us to champion demand-driven production and tackle post-harvest losses.",
        points: [
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
        ]
    },
    {
        img: "/images/sdg-goals/goal13.jpg",
        hoverImg: "/images/sdg-goals/goal13.gif",
        title: "Climate action",
        desc: "We support farmers to implement climate-smart agricultural techniques.",
        points: [
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
        ]
    },
    {
        img: "/images/sdg-goals/goal15.jpg",
        hoverImg: "/images/sdg-goals/goal15.gif",
        title: "Life on land",
        desc: "We ensure that farmers preserve the biodiversity on their farms as they increase production.",
        points: [
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
            {
                img: "/images/12.svg",
                text: "Lorem Ipsum"
            },
        ]
    },
]

export const impactFarmingGallery = [
    {
        src: "/ifg1.svg",
        style: "col-span-3 row-span-2",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
    {
        src: "/ifg2.svg",
        style: "col-span-2 row-span-1",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
    {
        src: "/ifg4.svg",
        style: "col-span-1 row-span-1",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
    {
        src: "/ifg3.svg",
        style: "col-span-2 row-span-1",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
   
    {
        src: "/ifg5.svg",
        style: "col-span-1 row-span-1",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
    {
        src: "/ifg6.svg",
        style: "col-span-2 row-span-1",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
    {
        src: "/ifg8.svg",
        style: "col-span-1 row-span-1",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
    {
        src: "/ifg10.svg",
        style: "col-span-3 row-span-2",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
    {
        src: "/ifg7.svg",
        style: "col-span-2 row-span-1",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
    
    {
        src: "/ifg9.svg",
        style: "col-span-1 row-span-1",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
    
]

export const impactEventsGallery = [
    {
        src: "/ieg1.svg",
        style: "col-span-5 row-span-2",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
    {
        src: "/ieg2.svg",
        style: "col-span-3 row-span-1",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
    {
        src: "/ieg3.svg",
        style: "col-span-2 row-span-1",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
    {
        src: "/ieg4.svg",
        style: "col-span-1 row-span-1",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
    {
        src: "/ieg5.svg",
        style: "col-span-3 row-span-1",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
    {
        src: "/ieg6.svg",
        style: "col-span-1 row-span-1",
        title: "Event name",
        impact: "Impact",
        alt: ""
    },
]

export const socialLinks = [
    {
        social: "Instagram",
        icon: FaInstagram,
        link: SOCIAL_LINKS.instagram
    },
    {
        social: "Twitter",
        icon: FaXTwitter,
        link: SOCIAL_LINKS.twitter
    },
    {
        social: "LinkedIn",
        icon: FaLinkedinIn,
        link: SOCIAL_LINKS.linkedin
    },
    {
        social: "Facebook",
        icon: FaFacebookF,
        link: SOCIAL_LINKS.facebook
    },
]

export const dummyNews: News[] = [
    {
        img: "blur.svg",
        subtitle: "Lorem ipsum.",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
    {
        img: "blur.svg",
        subtitle: "Lorem ipsum.",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
    {
        img: "blur.svg",
        subtitle: "Lorem ipsum.",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
    {
        img: "blur.svg",
        subtitle: "Lorem ipsum.",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
    {
        img: "blur.svg",
        subtitle: "Lorem ipsum.",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
    {
        img: "blur.svg",
        subtitle: "Lorem ipsum.",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
    {
        img: "blur.svg",
        subtitle: "Lorem ipsum.",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa."
    },
]