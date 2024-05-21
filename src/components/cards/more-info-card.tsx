import { MoreInfo } from "@/types";

export default function MoreInfoCard({ data }: { data: MoreInfo }) {
    const {author, company, quote, results } = data
    return (
        <article className="bg-gold-400 text-[#3b3b3b] aspect-square h-[400px] flex flex-col justify-between p-4 rounded-[7px]" style={{
            scrollSnapAlign: 'start',
            flex: '0 0 auto',
        }}>
            <div className="flex flex-col gap-2">
                <p className="text-sm">
                    {company}
                </p>
                <p className="text-2xl font-medium">
                    &apos;&apos;
                    {quote}
                    &apos;&apos;
                </p>
                <p className="text-sm">
                    {author}
                </p>
            </div>
            <div className="flex flex-col">
                <p className="text-sm">Results</p>
            <div className="grid grid-cols-2 gap-4">
                    {
                        results.map(({ title, desc }, i) => (
                            <div key={i}>
                                <p className="font-semibold">
                                    {title}
                                </p>
                                <p className="text-xs">
                                    {desc}
                                </p>
                            </div>
                        ) )
                }
            </div>
            </div>

        </article>
    )
}