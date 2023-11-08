import Landing from "@/modules/landing/pages/Landing"
import Search from "@/modules/search/pages/Search"
import Detail from "@/modules/detail/pages/Detail"

//TODO: refactor the search and detail modules?

const routes = [
  { path: '/', element: Landing },
  { path: '/search', element: Search },
  { path: '/detail/:id', element: Detail },
]

export default routes
