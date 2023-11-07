import Header from "@/common/components/Header"
import Footer from "@/common/components/Footer"
import SearchForm from "@/common/components/SearchForm"

export default function Search() {
  return (
    <>
      <Header includeHero={true} />
      <SearchForm />
      <Footer />
    </>
  )
}
