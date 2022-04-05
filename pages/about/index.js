import Head from 'next/head'
import AboutHeader from '../../Components/About/AboutHeader'
import Analyst from '../../Components/About/Analyst'
import Goal from '../../Components/About/Goal'
import Talent from '../../Components/About/Talents'
import Values from '../../Components/About/Values'
export default function About()
{
    return(
        <>
        <Head>
            <title>About Us</title>
        </Head>
        <div>
            <AboutHeader/>
            <Analyst/>
            <Goal/>
            <Values/>
            <Talent/>
        </div>
        </>
    )
}