import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Growing from '../Components/Growing'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Growing/>
    <Footer/>
    </>
  )
}

export default MyApp