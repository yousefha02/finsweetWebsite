import Image from 'next/image'
export default function Latest()
{
    return(
        <div>
            <div className="container mx-auto px-6 py-[89px]">
            <div className="pt-6 text-center mb-20">
            <h2 className='text-[32px] leading-[34px] md:text-[40px] md:leading-[45px] xl:text-[56px] xl:leading-[61px] font-semibold mb-3'>Read our latest blogs</h2>
            <p className='text-[16px] leading-5 lg:text-[18px] lg:leading-[27px] mb-5 text-btn'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-4 border-[#D8D8D8] border-[1px] p-10 rounded-[24px]'>
                <div>
                <h3 className="title text-[24px] font-semibold">Trending Post</h3>
                <h2 className='text-[30px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-semibold text-btn leading-[34px] lg:leading-[60px] mb-5 lg:mb-7'>New invoicing features to help you get paid faster</h2>
                <p className="mb-5 text-[18px] leading-[27px] text-btn opacity-75">Over the past few months, we’ve added several new features to SaaS Invoicing to help any business get paid faster and streamline their collection workflows.</p>
                <h5 className=' text-[16px] text-btn font-semibold opacity-60'>Luke Matthews l  November 8, 2021</h5>
                </div>
                <Image src={'/images/4d3010f3e28bc9fc8f333b3da4088b42.png'} width="552px" height="319px" className="rounded-[20px]"/>
            </div>
            </div>
        </div>
    )
}