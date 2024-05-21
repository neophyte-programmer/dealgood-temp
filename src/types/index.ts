export type Navlink = {
    href: string
    label: string
    dropdown?: DropdownLink[]
}

export type DropdownLink = Navlink & {
    description: string
}

export type FooterLink = {
    company: Omit<Navlink, "dropdown">[]
    resources: Omit<Navlink, "dropdown">[]
    content: Omit<Navlink, "dropdown">[]
}

export type Offer = {
    img: string
    isCenter: boolean
    title: string
    desc: string
}

export type Review = {
    img: string
    title: string
    subtitle: string
    desc: string
}

export type MoreInfo = {
    company: string
    quote: string
    author: string
    results: {
        title: string
        desc: string
    }[]
}

export type MoreInfoAlt = {
    companies: string[]
    img: string
}


export type ControlButtonProps = {
    action: () => void
    variant: "next" | "prev"
    icon?: "arrow" | "chevron"
}

export type ChildrenOnly = {
    children: React.ReactNode
}

export type TeamMember = {
    img: string
    name: string
    position: string
}

export type ProductDetails = {
    moisture?: string
    purity?: string
    admixture?: string
    ffa?: string
    fat?: string
    oilContent?: string
    impurities?: string
    protein?: string
    foreignMatter?: string
    ngmoPurity?: string
    brokenKernels?: string
}

export type Product = {
    name: string
    desc: string
    category: "seeds" | "seedling" | "tech" | "product"
    thumbnail: string
    images: string[]
    model: string
    number: string
    details: ProductDetails
}

export type TrainingDetail = {
    bg: string
    title: string
    desc: string
    subtitle: string
}

export type Service = {
    img: string
    title: string
    desc: string
}

export type SDG = {
    img: string
    hoverImg: string
    title: string
    desc: string
    points: {
        img: string
        text: string
    }[]
}

export type ImpactGalleryItem = {
    src: string
    title: string
    style: string
    impact: string
    alt: string
}

export type News = {
    img: string
    subtitle: string
    title: string
    desc: string
}