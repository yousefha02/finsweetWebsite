import AOS from "aos";
import React from "react";
import "aos/dist/aos.css";

export default function Goal()
{
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className="bg-[#F0F2FE] overflow-hidden">
            <div className="container mx-auto px-6 py-[80px] grid md:grid-cols-2 gap-9 xl:gap-[60px] justify-between">
                <div data-aos="fade-right">
                <h3 className="title text-[24px] font-semibold">Our Goals</h3>
                <h2 className='text-[32px] leading-[34px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-semibold text-btn lg:leading-[60px] mb-5 lg:mb-7'>To upscale your businessto the next level</h2>
                <p className="text-[18px] leading-[27px] text-btn opacity-75">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>
                <div data-aos="fade-left">
                <h3 className="title text-[24px] font-semibold">Our Vision</h3>
                <h2 className='text-[32px] leading-[34px] md:text-[32px] lg:text-[42px] xl:text-[48px] font-semibold text-btn lg:leading-[60px] mb-5 lg:mb-7'>To provide solutions for growing companies</h2>
                <p className="text-[18px] leading-[27px] text-btn opacity-75">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>
            </div>
        </div>
    )
}