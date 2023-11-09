import Landing from "@/modules/landing/pages/Landing"
import Search from "@/modules/search/pages/Search"
import Detail from "@/modules/detail/pages/Detail"
import NotFound from "./common/pages/NotFound"

const routes = [
  { path: '/', element: Landing },
  { path: '/search', element: Search },
  { path: '/detail/:id', element: Detail },
  { path: '*', element: NotFound },
]

export default routes
