import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import SpecielItems from '../components/SpecialItems'
export default function Special() {
  return (
    <>
     <Head>
        <title>SpecialItems</title>
        <meta name="Cafe House" content="this is page for cafe house this like starbucks" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
    <Header title={"  Today's Special  "}/>
   <SpecielItems />
  </>
  )
}
