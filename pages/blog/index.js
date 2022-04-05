import Head from 'next/head'
import Latest from '../../Components/Blog/Latest'
import Posts from '../../Components/Blog/Posts'
export default function Blog()
{
    return(
        <>
        <Head>
            <title>Blog Page</title>
        </Head>
        <div>
            <Latest/>
            <Posts/>
        </div>
        </>
    )
}