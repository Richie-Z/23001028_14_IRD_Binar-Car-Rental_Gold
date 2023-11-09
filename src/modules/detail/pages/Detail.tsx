import Header from "@/common/components/Header"
import Footer from "@/common/components/Footer"
import SearchForm from "@/common/components/SearchForm"
import './styles.scss'
import { useNavigate, useParams } from "react-router-dom"
import AboutPacket from "../components/AboutPacket"
import { CarInformationCard, CarType } from "@/features/car/"
import { Suspense, useEffect, useState } from "react"
import { getCar } from "@/features/car/api"

const Detail = () => {
  const navigate = useNavigate()
  const params = useParams<{ id: string }>()
  const [car, setCar] = useState<CarType>()

  useEffect(() => {
    let carId: number;
    try {
      carId = parseInt(params.id ?? "", 10)
    } catch {
      return navigate('/')
    }
    (async function() {
      await getCar(carId).then(({ data }) => setCar(data))
    })()
  }, [navigate, params.id])

  return (
    <>
      <Header includeHero={false} />
      <SearchForm isSearching={false} onSearchClick={() => navigate('/search')} />
      <section id="detail">
        <AboutPacket />
        {typeof car !== "undefined" && (
          <CarInformationCard car={car} />
        )}
      </section>
      <Footer />
    </>
  )
}

export default Detail
