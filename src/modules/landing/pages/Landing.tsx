import Header from "@/common/components/Header"
import Footer from "@/common/components/Footer"
import OurService from "../components/OurService"
import WhyUs from "../components/WhyUs"
import Testimonial from "../components/Testimonial"
import CTA from "../components/CTA"
import FAQ from "../components/FAQ"

export default function Landing() {
  return (
    <>
      <Header includeHero={true} />
      <OurService />
      <WhyUs />
      <Testimonial />
      <CTA />
      <FAQ />
      <Footer />
    </>
  )
}
