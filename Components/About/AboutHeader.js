import Image from 'next/image'
export default function AboutHeader()
{
    return(
        <div>
            <div className="contianer mx-auto px-6 py-[80px] text-center">
            <div className="py-8 mb-5">
                <h2 className='text-[32px] leading-[34px] xl:text-[56px] xl:leading-[61px] font-semibold mb-3'>We are proud of our products</h2>
                <p className="text-[18px] leading-[27px] text-btn opacity-75">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                <Image src="/images/people-working-in-front-of-the-computer-3184357.png" width="325px" height="288px" className=" rounded-3xl"/>
                <Image src="/images/person-using-macbook-pro-3861964.png" width="325px" height="288px" className=" rounded-3xl"/>
                <Image src="/images/man-working-from-home-5198252.png" width="325px" height="288px" className=" rounded-3xl"/>
            </div>
            </div>
        </div>
    )
}