import Image from "next/image"
import infoposts from "../../Data/infoposts"
import { useRouter } from "next/router"
import Link from 'next/link'
export default function Posts()
{
    const router =useRouter();
    
    return(
        <div>
            <div className="container mx-auto px-6 py-[80px] ">
                <h2 className="text-btn text-[56px] mb-6 text-center font-semibold">All Posts</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 gap-y-20">
                {
                    infoposts.map((box,index)=>
                    {
                        return(
                            <div onClick={()=>router.push(`/blog/${box.id}`)} key={index+700} className=" cursor-pointer mx-auto">
                                <div>
                                <Image src={`/images/posts/${box.image}`} width="380px" height="256px" className="rounded-[16px]"/>
                                </div>
                                <h3 className="font-semibold text-[24px] text-btn mt-3 mb-2">{box.title}</h3>
                                <p className="text-btn opacity-75 text-[16px] mb-2">{box.desc}</p>
                                <h5 className="text-btn opacity-70 font-semibold text-[16px]">{box.date}</h5>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}