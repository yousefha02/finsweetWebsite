import Image from "next/image"
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Content()
{
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className="relative overflow-hidden">
            <div className="container mx-auto px-6 py-[80px] grid lg:grid-cols-2 gap-7 items-center">
               <div data-aos="fade-right" className="overflow-hidden">
                    <h2 className="text-[30px] sm:text-[48px] font-semibold text-btn leading-[36px] md:leading-[60px] mb-2 lg:mb-8">More impressions, more conversions</h2>  
                    <p className="text-[16px] leading-6 text-btn mb-4 lg:mb-10">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</p>
                    <button className=" bg-btn text-white w-[144px] rounded-xl text-[16px] h-[56px] hover:bg-[#313852] duration-300">Get Free Trial</button>
              </div> 
              <div data-aos="fade-left" className="text-center">
                  <Image src={'/images/Image.png'} width="576px" height={"435px"} className="max-w-full"/>
              </div>
            </div>
            <div className="content -z-40 absolute w-full h-full top-0 left-0 max-w-full" ></div>
        </div>
    )
}