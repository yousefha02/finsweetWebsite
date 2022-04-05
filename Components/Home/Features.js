import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import infofeatures from "../../Data/infofeatures"
export default function Features()
{
    return(
        <div className='overflow-hidden'>
            <div className="contianer mx-auto px-6 py-[80px] text-center">
                <h3 className='text-[40px] md:text-[48px] font-semibold text-btn leading-[44px] md:leading-[60px] mb-3 lg:mb-8'>Features</h3>
                <div data-aos="fade-left" className="features grid md:grid-cols-2 lg:grid-cols-3 rounded-3xl p-10 gap-4 md:gap-[20px]">
                    {
                        infofeatures.map((box,index)=>
                            {
                                return(
                                    <div className={`text-left before p-5 pl-7 ${index%2!=0?"lg:border-x-bdr lg:border-x":""}`} key={index+1200}>
                                        <FontAwesomeIcon icon={box.icon} className="text-[#6B7CFF] mb-3 text-5xl"/>
                                        <h3 className="mb-2 md:mb-5 text-[28px] md:text-[32px] text-btn font-semibold leading-8 md:leading-[38px] md:pr-[68px]">{box.title}</h3>
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