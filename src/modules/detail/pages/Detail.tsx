import Header from "@/common/components/Header"
import Footer from "@/common/components/Footer"
import SearchForm from "@/common/components/SearchForm"
import './styles.scss'
import { useNavigate } from "react-router-dom"
import AboutPacket from "../components/AboutPacket"
import { CarInformationCard } from "@/features/car/"

const Detail = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header includeHero={false} />
      <SearchForm isSearching={false} onSearchClick={() => navigate('/search')} />
      <section id="detail">
        <AboutPacket />
        <CarInformationCard />
      </section>
      <Footer />
    </>
  )
}

export default Detail
