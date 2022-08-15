import Head from 'next/head'
import BestCoffe from '../components/BestCoffe'
import ContactUs from '../components/ContactUs'
import DailyMenu from '../components/DailyMenu'
import Header from '../components/Header'
import PopularItems from '../components/PopularItems'
import TodaySpecial from '../components/TodaySpecial'
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="Cafe House" content="this is page for cafe house this like starbucks" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Header title={"  Contact Us  "}/>
      <BestCoffe />
      <ContactUs />

    </>
  )
}
