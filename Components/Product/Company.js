import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import infoService from "../../Data/infoService"
export default function Company()
{
    return(
        <div className="relative pt-[20px] overflow-hidden">
            <div className="pt-[80px] pr-8">
            <h2 className='text-center text-[32px] leading-[34px] md:text-[48px] font-semibold text-btn md:leading-[60px] mb-5 lg:mb-20'>Get the best out of your company with our service</h2>
            <div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-7 services rounded-tr-[27px] p-10 ]">
                    {
                        infoService.map((box,index)=>
                        {
                            return <div key={index+300}>
                                <FontAwesomeIcon icon={box.icon} className="text-[#6B7CFF] mb-2 text-5xl"/>
                                <h3 className="mb-2 md:mb-3 text-[24px] text-btn font-semibold leading-[28px] md:pr-[68px]">{box.title}</h3>
                                <p className=" text-[16px] text-btn leading-[24px]">{box.desc}</p>
                            </div>
                        })
                    }
                </div>
            </div>
            </div>
            <div className="company -z-40 absolute w-full h-full top-0 left-0 max-w-full"></div>
        </div>
    )
}