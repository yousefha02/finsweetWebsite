import Head from "next/head"
import Message from "../../Components/Contact/Message"
export default function Contact()
{
    return(
        <>
            <Head>
                <title>Contact Page</title>
            </Head>
            <h2 className='pt-[140px] text-center text-[32px] leading-[34px] md:text-[40px] md:leading-[45px] xl:text-[56px] xl:leading-[61px] font-semibold mb-1'>Get in touch with us</h2>
            <Message/>
        </>
    )
}