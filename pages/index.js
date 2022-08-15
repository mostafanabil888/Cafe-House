import Head from 'next/head'
import BestCoffe from '../components/BestCoffe'
import DailyMenu from '../components/DailyMenu'
import Header from '../components/Header'
import PopularItems from '../components/PopularItems'
import TodaySpecial from '../components/TodaySpecial'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="Cafe House" content="this is page for cafe house this like starbucks" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Header title={" Welcome To  "}/>
      <BestCoffe />
      <PopularItems />
      <TodaySpecial />
      <DailyMenu />
    </>
  )
}
