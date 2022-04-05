import {useRouter} from 'next/router'
import { React,useEffect, useState } from 'react'
import Image from 'next/image'
import infoposts from '../../Data/infoposts'
export default function Post()
{
    const router = useRouter()
    const {postid} = router.query;

    const post=infoposts.filter(post=>post.id==postid)[0];
    const [on,setOn] = useState(false);

    const part = [];
    const [load,setLoad] = useState(false);

    function add()
    {
        const arr = infoposts.filter(box=>box.id!==parseInt(postid))
        for(let i=0; i<3; i++)
        {
            const num = Math.floor(Math.random() * arr.length);
            part.push(arr[num])
        }
    }

    add();

    useEffect(()=>
    {
        if(part.length!=0)
            setLoad(true)
    },[part])

    useEffect(()=>
    {
        setOn(true)
    },[post])

    return(on&&
        <div>
            <div className='container mx-auto px-6 py-[80px] overflow-hidden'>
            <div className='pt-20 text-center'>
                <h2 className='w-[768px] max-w-full m-auto text-[30px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-semibold text-btn leading-[44px] lg:leading-[60px] mb-5 lg:mb-7'>{post.title}</h2>
                <h4 className=' text-btn opacity-60 text-[16px] mb-10'>{post.date}</h4>
                <Image src={`/images/posts/${post.image}`} width="1280px" height="512px" className=' rounded-[24px]'/>
            </div>
            <div className='w-[768px] max-w-full m-auto'>
            <h2 className='text-[30px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-semibold text-btn leading-[44px] mt-7 lg:leading-[60px] mb-3 lg:mb-4'>This is a blog post headline</h2>
            {
                post.headline.map((box,index)=><p key={index} className='text-16 leading-[24px] text-btn mb-6'>{box}</p>)
            }
            <h2 className='text-[30px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-semibold text-btn leading-[44px] lg:leading-[60px] mb-3 lg:mb-4'>This is a small blog post headline</h2>
            {
                post.small.map((box,index)=><p key={index+200} className='text-16 leading-[24px] text-btn mb-6'>{box}</p>)
            }
            </div>
            <div className='pt-[80px]'>
            <h2 className='w-[768px] max-w-full m-auto text-[30px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-semibold text-btn leading-[44px] lg:leading-[60px] mb-5 lg:mb-7 text-center'>Read more posts</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20'>
                {
                    load&&part.map((box,index)=>
                        {
                            return(
                                <div onClick={()=>router.push(`/blog/${box.id}`)} key={index+100} className=" cursor-pointer m-auto">
                                    <Image src={`/images/posts/${box.image}`} width="411px" height="256px" className="rounded-[16px]"/>
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
        </div>
    )
}