import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react'
import routes from './routes'

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
