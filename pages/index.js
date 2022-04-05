import Head from 'next/head'
import Growing from '../Components/Growing'
import Content from '../Components/Home/Content'
import Discover from '../Components/Home/Discover'
import Features from '../Components/Home/Features'
import LandingHome from '../Components/Home/LandingHome'
import Logos from '../Components/Home/Logos'
import People from '../Components/Home/People'
import Quality from '../Components/Home/Quality'
import Whyus from '../Components/Home/Whyus'
export default function Home() {
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
    <div>
      <LandingHome/>
      <Quality/>
      <Whyus/>
      <Content/>
      <Logos/>
      <Discover/>
      <Features/>
      <People/>
    </div>
    </>
  )
}