import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import About from "./component/About/About"

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
