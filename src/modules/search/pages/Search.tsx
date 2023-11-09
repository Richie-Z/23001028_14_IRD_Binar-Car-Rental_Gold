import Header from "@/common/components/Header"
import Footer from "@/common/components/Footer"
import SearchForm from "@/common/components/SearchForm"
import { CarCard, CarType } from "@/features/car"
import { useState } from "react"
import "./styles.scss"

const Search = () => {
  const [isSearching, setIsSearching] = useState<boolean>(true);
  const [cars, setCars] = useState<CarType[]>([]);

  return (
    <>
      <Header includeHero={isSearching} includeBtn={false} />
      <SearchForm isSearching={isSearching} onSearchClick={(cars) => { setCars(cars ?? []); setIsSearching(!isSearching) }} />
      {!isSearching && (
        <section id="items">
          {cars.map((val, i) => (
            <CarCard key={i} car={val} />
          ))}
        </section>
      )}
      <Footer />
    </>
  )
}

export default Search
