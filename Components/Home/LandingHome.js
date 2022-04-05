import Image from 'next/image'
export default function LandingHome()
{
    return(
        <div className='text-center home pt-5'>
            <div className="contianer mx-auto px-6 py-[80px]">
            <div className='w-[768px] max-w-full m-auto leading-[62px] relative'>
            <h2 className='text-[32px] leading-[30px] md:text-[56px] font-semibold mb-2 text-btn md:leading-[60px]'>The Best Software to Grow your Sales and Services</h2>
            <p className=' text-btn text-[16px] leading-[27px] mb-8'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
            <div className='w-[576px] px-3 bg-white h-[72px] m-auto mb-12 rounded-[20px] max-w-full flex items-center justify-between'>
            <input
            type="email"
            placeholder="Enter Your Email"
            className='rounded-[20px]'
            />
            <button className=" bg-btn text-white w-[144px] rounded-xl text-[16px] h-[56px] hover:bg-[#313852] duration-300">Get Free Trial</button>
            </div>
            </div>
            <Image src={'/images/Dashboard image.png'} height="667px" width="1024px" className='-z-20'/>
            </div>
            <div className='box absolute max-w-full w-[524px] h-[496px] top-[247px] left-[50%] translate-x-[-50%]'></div>
        </div>
    )
}