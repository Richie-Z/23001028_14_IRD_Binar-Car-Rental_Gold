import Header from "@/common/components/Header"
import Footer from "@/common/components/Footer"
import SearchForm from "@/common/components/SearchForm"
import './styles.scss'
import { useNavigate, useParams } from "react-router-dom"
import AboutPacket from "../components/AboutPacket"
import { CarInformationCard, CarType } from "@/features/car/"
import { useEffect, useState } from "react"
import { getCar } from "@/features/car/api"
import { toast } from "react-toastify"
import { AxiosError } from "axios"

const Detail = () => {
  const navigate = useNavigate()
  const params = useParams<{ id: string }>()
  const [car, setCar] = useState<CarType>()

  useEffect(() => {
    const toastId = toast.loading("Searching car...")
    if (!/\d+/.test(params.id!)) {
      navigate("/404");
    }
    (async function() {
      try {
        const car = await getCar(params.id!)
        toast.update(toastId, { render: "Done", type: "success", isLoading: false, autoClose: 1000, style: { display: "none" } })
        setCar(car.data)
      } catch (error) {
        toast.update(toastId, { render: (error as AxiosError).message ?? "Error Occured", type: "error", isLoading: false, autoClose: 1000 })
        navigate('/404')
      }
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
