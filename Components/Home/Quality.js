import React from "react";
import infoquality from "../../Data/infoquality"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Quality()
{
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div>
            <div className="contianer mx-auto px-6 py-[80px] text-center">
                <h3 className=" text-2xl landing-[29px] title font-semibold">High-quality</h3>
                <h2 className="text-[32px] leading-[30px] md:text-[48px] font-semibold text-btn md:leading-[60px] mb-8 w-[576px] max-w-full m-auto">We have the Best Solution for your Business</h2>
                <div data-aos="fade-right" className="grid md:grid-cols-2 lg:grid-cols-3 bg-[#E0E4FC] rounded-3xl p-10 gap-4 md:gap-[20px]">
                    {
                        infoquality.map((box,index)=>
                            {
                                return(
                                    <div className="text-left" key={index+1600}>
                                        <FontAwesomeIcon icon={box.icon} className="text-[#6B7CFF] mb-3 text-5xl"/>
                                        <h3 className="mb-2 md:mb-5 text-[28px] md:text-[32px] text-btn font-semibold leading-[32px] md:pr-[68px]">{box.title}</h3>
                                        <p className=" text-[16px] text-btn leading-[24px]">{box.desc}</p>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}