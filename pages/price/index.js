import Head from "next/head"
import Pricing from "../../Components/Price/Pricing"
import Questions from "../../Components/Price/Questions"
export default function Price()
{
    return(
        <>
        <Head>
            <title>Pricing Page</title>
        </Head>
        <div>
            <Pricing/>
            <Questions/>
        </div>
        </>
    )
}