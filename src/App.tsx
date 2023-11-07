import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "@/modules/landing/pages/Landing"
import Search from "@/modules/search/pages/Search"
import React from 'react'

const routes = [
  { path: '/', element: Landing },
  { path: '/search', element: Search },
]

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((val, i) => (
            <Route key={i} path={val.path} element={React.createElement(val.element)} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}
