import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import CopyRight from './CopyRight'
export default function Layout({ children }) {
  return (
    <>
         <Navbar />
        {children}
        <Footer />
        <CopyRight />
    </>
  )
}
