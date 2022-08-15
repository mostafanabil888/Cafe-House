import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import BestCoffe from '../components/BestCoffe'
import OwnMenu from '../components/OwnMenu'
export default function Menu() {
  return (
    <>
       <Head>
        <title>Menu</title>
        <meta name="Cafe House" content="this is page for cafe house this like starbucks" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Header title={"  Our Menus "}/>
      <BestCoffe />
      <OwnMenu />
    </>
  )
}
