import Head from 'next/head'
import Service from '../../Components/Product/Service'
import Logos from '../../Components/Home/Logos'
import Company from '../../Components/Product/Company'
import Features from '../../Components/Home/Features'
import Client from '../../Components/Product/Client'
import Performance from '../../Components/Product/Performance'
import Leads from '../../Components/Product/Leads'
import Time from '../../Components/Product/Time'
export default function Product()
{
    return(
        <>
            <Head>
                <title>Product Page</title>
            </Head>
            <div>
                <Service/>
                <Logos/>
                <Company/>
                <Client/>
                <Performance/>
                <Leads/>
                <Time/>
                <Features/>
            </div>
        </>
    )
}