import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Sponsors from '@/components/Sponsors'
import Services from '@/components/Services'
import RecentIds from '@/components/RecentIds'
import TravelPoint from '@/components/TravelPoint'
import KeyFeatures from '@/components/KeyFeatures'
import Testimonials from '@/components/Testimonials'
import NewsLater from '@/components/NewsLater'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='bg-white'>
      <main className="landing-container h-[100vh] bg-[url('/bgLadient.svg')] bg-white bg-no-repeat 2xl:container mx-auto">
        <Header />
        <Hero />
        <Sponsors />
        <Services />
        <RecentIds />
        <TravelPoint />
        <KeyFeatures />
        <Testimonials />
        {/* <NewsLater /> */}
        <Footer />
      </main>
    </div>
  )
}

export default page