import Header from "@/common/components/Header"
import Footer from "@/common/components/Footer"
import SearchForm from "@/common/components/SearchForm"
import { useState } from "react"

const Search = () => {
  const [isSearching, setIsSearching] = useState<boolean>(true);

  return (
    <>
      <Header includeHero={isSearching} includeBtn={false} />
      <SearchForm isSearching={isSearching} onSearchClick={() => setIsSearching(!isSearching)} />
      <Footer />
    </>
  )
}

export default Search
