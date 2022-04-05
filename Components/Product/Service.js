import Image from 'next/image'
export default function Service()
{
    return(
        <div className=" pt-10">
            <div className="contianer mx-auto px-6 py-[80px] grid md:grid-cols-2 items-center gap-5">
                <div>
                    <h2 className='text-[32px] leading-[34px] xl:text-[56px] xl:leading-[61px] font-semibold mb-3'>Grow your Sales and Services</h2>
                    <p className='text-[16px] leading-5 lg:text-[18px] lg:leading-[27px] mb-5 text-btn'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div>
                        <button className="mr-5 mb-3 bg-btn text-white w-[144px] rounded-xl text-[16px] h-[56px] hover:bg-[#313852] duration-300">Get Started</button>
                        <button className=" bg-[#fff] text-btn w-[144px] rounded-xl text-[16px] h-[56px] service border-[#6B7CFF] border-[1px]">Contact us</button>
                    </div>
                </div>
                <div>
                    <Image src='/images/Dashboard image.png' height="401px" width="616px"/>
                </div>
            </div>
        </div>
    )
}