import Image from "next/image"
export default function Time()
{
    return(
        <div>
            <div className="relative overflow-hidden">
            <div className="container mx-auto px-6 py-[80px] grid lg:grid-cols-2 gap-7 items-center">
            <div data-aos="fade-right" className="text-center">
                  <Image src={'/images/Image (2).png'} width="576px" height={"435px"} className="max-w-full"/>
              </div>
               <div data-aos="fade-left">
                   <h3 className="title text-[24px] font-semibold">Marketing insights</h3>
                    <h2 className="text-[30px] sm:text-[48px] font-semibold text-btn leading-[40px] md:leading-[60px] mb-2 lg:mb-8">More impressions, more conversions</h2>  
                    <p className="text-[16px] leading-6 text-btn mb-4 lg:mb-10">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
              </div> 
            </div>
        </div>
        </div>
    )
}