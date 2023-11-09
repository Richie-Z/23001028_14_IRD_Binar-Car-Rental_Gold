import Header from "@/common/components/Header"
import Footer from "@/common/components/Footer"
import SearchForm from "@/common/components/SearchForm"
import { CarCard } from "@/features/car"
import { useState } from "react"
import "./styles.scss"

const Search = () => {
  const [isSearching, setIsSearching] = useState<boolean>(true);

  return (
    <>
      <Header includeHero={isSearching} includeBtn={false} />
      <SearchForm isSearching={isSearching} onSearchClick={() => setIsSearching(!isSearching)} />
      {!isSearching && (
        <section id="items">
          <CarCard />
          <CarCard />
          <CarCard />
        </section>
      )}
      <Footer />
    </>
  )
}

export default Search
