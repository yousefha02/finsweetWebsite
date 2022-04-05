import infoteam from "../../Data/infoteam"
import Image from 'next/image'
export default function Talent()
{
    return(
        <div>
            <div className="container mx-auto px-6 py-[80px] md:flex-row flex-col md:flex gap-6 justify-between">
                <div className="w-full md:w-[50%] lg:w-[40%] mb-6">
                    <h2 className="text-[30px] sm:text-[44px] font-semibold text-btn leading-[40px] lg:leading-[60px] mb-2 lg:mb-5">Our talented Team</h2>
                    <p className=" tex-btn opacity-70 text-[18px] leading-[27px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>  
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:grid-cols-2">
                    {
                        infoteam.map((box,index)=>
                        {
                            return <div key={index+800} className="flex flex-col rounded-[12px] bg-[#E0E4FC]">
                                        <Image src={`/images/${box.image}`} width="264px" height="224px" className="rounded-[12px]"/>
                                        <div className="pt-2 px-4 pb-5">
                                            <h4 className="text-btn text-[24px] font-semibold">{box.name}</h4>
                                            <p className="text-btn text-[16px]">{box.desc}</p>
                                        </div>
                                   </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}