import infovalues from "../../Data/infovalues"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Values()
{
    return(
        <div>
            <div className="container mx-auto px-6 py-[80px]">
                <div className="text-center">
                <h2 className="text-[30px] sm:text-[48px] font-semibold text-btn leading-[40px] md:leading-[60px] mb-2 lg:mb-3">Our corporate values</h2>  
                <p className="text-btn opacity-80 text-[16px] mb-10">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>                
                </div>
                <div className="rounded-3xl grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-7 bg-[#F9F0FB] rounded-tr-[27px] p-10 ]">
                        {
                            infovalues.map((box,index)=>
                            {
                                return <div key={index+900}>
                                    <FontAwesomeIcon icon={box.icon} className="text-[#6B7CFF] mb-2 text-5xl"/>
                                    <h3 className="mb-2 md:mb-3 text-[24px] text-btn font-semibold leading-[28px] md:pr-[68px]">{box.title}</h3>
                                    <p className=" text-[16px] text-btn leading-[24px]">{box.desc}</p>
                                </div>
                            })
                        }
                </div>
            </div>
        </div>
    )
}