import SingleProductCarousel from "@/components/carousel/single-product-carousel"
import { products } from "@/lib/data"
import { slug } from "@/lib/utils"

type Props = {
    params: {
        productName: string
    }
}

export default function SingleProduct({ params }: Props) {
    const { productName } = params
    const productInfo = products.filter((item) => slug(item.name) === productName)[0]
    const { category, desc, details, images, model, name, number, thumbnail } = productInfo
    const carouselImages = [thumbnail, ...images]
    return (
        <>
            <section className=" container py-6 md:py-12 grid md:grid-cols-2">
                <SingleProductCarousel carouselImages={carouselImages} />
                <div className="w-full flex md:px-8 flex-col gap-4">
                    <p className="capitalize text-sm">
                        {category}
                    </p>
                    <h2 className="text-3xl">
                        {name}
                    </h2>
                    <p className="text-grass-200/80">
                        {model || "Product Model"} and {number || "Number"}
                    </p>

                    <div className="mt-4">
                        <h5 className="text-xl">
                            Details
                        </h5>
                        <div className="text-[#A1A1A1] w-full flex flex-col gap-2 ">
                            {details.moisture && <DetailsRow label="Moisture" value={details.moisture} />}
                            {details.admixture && <DetailsRow label="Admixture" value={details.admixture} />}
                            {details.purity && <DetailsRow label="Purity" value={details.purity} />}
                            {details.ffa && <DetailsRow label="FFA" value={details.ffa} />}
                            {details.fat && <DetailsRow label="Fat" value={details.fat} />}
                            {details.oilContent && <DetailsRow label="Oil Content" value={details.oilContent} />}
                            {details.impurities && <DetailsRow label="Impurities" value={details.impurities} />}
                            {details.protein && <DetailsRow label="Protein" value={details.protein} />}
                            {details.foreignMatter && <DetailsRow label="Foreign Matter" value={details.foreignMatter} />}
                            {details.ngmoPurity && <DetailsRow label="NGMO Purity" value={details.ngmoPurity} />}
                            {details.brokenKernels && <DetailsRow label="Broken Kernels" value={details.brokenKernels} />}
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

type DetailsRowProps = {
    label: string
    value: string | undefined
}

function DetailsRow({ label, value }: DetailsRowProps) {
    return (
        <div className="w-full grid grid-cols-5">
            <div className="col-span-2">
                {label}
            </div>
            <div className="col-span-1">
                -
            </div>
            <div className="col-span-2">
                {value || "N/A"}
            </div>
        </div>
    )
}