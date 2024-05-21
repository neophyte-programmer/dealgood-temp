import OfferCard from '@/components/cards/offer-card'
import MoreInfoCarousel from '@/components/carousel/more-info-carousel'
import ReviewCarousel from '@/components/carousel/review-carousel'
import AbsoluteImage from '@/components/core/absolute-image'
import RelativeImage from '@/components/core/relative-image'
import { Button } from '@/components/ui/button'
import { homeGallery, offers } from '@/lib/data'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className=' relative bg-soil-50  bg-center bg-cover bg-no-repeat w-full' style={{
        backgroundImage: `url("/images/vectors/home-3.svg")`,
      }} >

        {/* BEGIN: ABSOLUTE IMAGES */}
        <AbsoluteImage src="home-1.svg" style="absolute w-[400px] aspect-square left-[10%]  -top-[100px]" />
        <AbsoluteImage src="home-2.svg" style="w-[200px] aspect-square right-[20%]   -top-[70px]" />
        <AbsoluteImage src="home-4.svg" style="-right-[25%] md:-right-[15%] lg:-right-[5%] translate-y-[60%] md:translate-y-[30%] top-10 aspect-[9/16] w-[200px] md:w-[320px] "  />

        

        {/* END: ABSOLUTE IMAGES */}

        {/* HERO SECTION */}
        <div className='container relative min-h-[60vh] md:min-h-[70vh]  flex justify-center w-full items-center gap-8 px-4 py-8'>
          <div className='absolute left-0 top-10 aspect-[9/16] md:w-[320px] hidden  lg:block z-10'>
            <Image priority alt="hero img" src="/images/home-hero.svg" fill className='object-contain' />
          </div>


          <div className='flex items-center justify-center flex-col gap-4'>
            <h4 className='text-grass-200'>DEALGOOD</h4>
            <h1 className=' text-4xl md:text-6xl text-center flex-wrap flex items-center gap-2 md:gap-4'>
              Build <div className='w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#CDD8C7]' />
              Grow <div className='w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#CDD8C7]' />
              Maintain
            </h1>
            <p className='text-center text-grass-200/75 mx-auto max-w-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa.
            </p>

            <RelativeImage priority src="home-hero.svg" styles="relative w-[200px] md:w-[370px] aspect-[9/12] block  lg:hidden z-10" />
           
          </div>
        </div>
        <div className='flex items-center px-2 justify-center flex-col gap-4'>
          <h1 className='text-2xl md:text-4xl flex items-center gap-4'>
            What do we offer?
          </h1>
          <p className='text-center text-grass-200/75 mx-auto max-w-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim cursus sed interdum laoreet enim massa.
          </p>
        </div>

        {/* WHAT WE OFFER SECTION */}
        <div className='relative w-full lg:mt-10'>
          <AbsoluteImage  src="home-5.svg" style="top-[80px] -left-10 aspect-[9/11] w-[150px] md:w-[220px] " />

          <div className='container relative   flex flex-col justify-center w-full items-center gap-8 md:gap-16 px-4 py-8'>


            <div className='grid md:grid-cols-3 gap-4 md:gap-8 max-md:w-full'>
              {
                offers.map((offer, index) => (
                  <OfferCard key={index} data={offer} />
                ))
              }
            </div>
          </div>

        </div>

      </section>
      <section className='mt-10 md:mt-20 flex items-center justify-center relative w-full min-h-[400px]'>
        <AbsoluteImage src="home-6.svg" style="top-[80px] -left-10 aspect-[9/11] w-[150px] md:w-[220px] " />
        <AbsoluteImage src="home-7.svg" style="top-[80px] -right-20 aspect-[9/11] w-[250px] md:w-[320px]" />

        <div className='container relative   flex  justify-center w-full items-center  '>
          <div className='grid md:grid-cols-2 max-w-5xl '>

            <div className='flex flex-col items-center justify-center gap-5'>
              <p className='text-[#3B3B3B] text-xl md:text-3xl text-center'>
                We provide you with the best and most effective agro-tech known to man
              </p>
              <Button>
                See more
              </Button>
            </div>
            <div className='relative w-full aspect-[4/3]'>
              <Image src="/images/bags.svg" alt="bags of grain" fill />
            </div>
          </div>
        </div>
      </section>
      <section className=' relative bg-soil-50 flex flex-col gap-8 px-4 min-h-screen mt-10 aspect-[9/15] py-10 lg:py-20 bg-top bg-cover bg-no-repeat w-full' style={{
        backgroundImage: `url("/images/gellerybg.svg")`,
      }}  >
        <h2 className='text-4xl text-grass-500 font-semibold mx-auto text-center'>
          Gallery
        </h2>

        <div className='w-full max-w-5xl h-full  gap-2  mx-auto grid grid-cols-5'>
          {
            homeGallery.map((item, i) => (
              <div key={i} className={cn("rounded-[7px] w-full col-span-4 relative", item.style)} >
                <Image fill src={`/images${item.src}`} alt={item.alt} className='object-cover rounded-[7px]' />
              </div>
            ))
          }
        </div>

      </section>

      <section className='relative flex flex-col gap-8 py-8'>
        <AbsoluteImage src="home-8.svg" style="top-[80px] left-0 aspect-[1/4] w-[70px] md:w-[120px]" />
        <AbsoluteImage src="home-9.png" style="top-0 right-0 aspect-[1/4] w-[100px] md:w-[150px]" />
        <h2 className='text-3xl md:text-4xl text-grass-500 font-semibold mx-auto text-center'>
          Reviews from Clients
        </h2>
        <ReviewCarousel />
      </section>

      <section className='py-12 md:py-16 '>
        <div className='container flex flex-col gap-4'>
          <div className='flex items-center gap-4 justify-between'>
            <h3 className='font-semibold text-lg text-grass-500'>
              Contains more information
            </h3>
            <button>
              See all
            </button>
          </div>
          <MoreInfoCarousel />
        </div>
      </section>

    </>
  )
}
