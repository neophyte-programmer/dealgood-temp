import NewsCard from "@/components/cards/news-card";
import HeadSub from "@/components/core/head-sub";
import { dummyNews } from "@/lib/data";

export default function NewsPage() {
    return (
        <>
            <HeadSub
                title="News"
                lg
            />
            <section className="mb-10 container grid md:grid-cols-2 gap-4 md:gap-8">
                {
                    dummyNews.slice(0, 4).map((item, index) => (
                        <NewsCard data={item} key={index} />
                    ))
                }
            </section>
            <section className="mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 container">
                {
                    dummyNews.map((item, index) => (
                        <NewsCard data={item} key={index} />
                    ))
                }
            </section>
        </>
    )
}