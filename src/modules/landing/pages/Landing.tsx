import Header from "@/common/components/Header"
import Footer from "@/common/components/Footer"
import OurService from "../components/OurService"

export default function Landing() {
  return (
    <>
      <Header includeHero={true} />
      <OurService />
      <Footer />
    </>
  )
}
