import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from "@fortawesome/free-solid-svg-icons"
import { faPlane} from "@fortawesome/free-solid-svg-icons"
import { faFile} from "@fortawesome/free-solid-svg-icons"

export default function Discover()
{
    const data =
    [
        {
            icon:faPlane,
            title:"Sales Tracking",
            desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
        {
            icon:faUser,
            title:"Project Management",
            desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
        {
            icon:faFile,
            title:"Activity Report",
            desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        }

    ]

    return(
        <div>
            <div className="contianer mx-auto px-6 pt-[30px] pb-[80px] grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                <div>
                    <h3 className="title text-[24px] font-semibold">Discover More</h3>
                    <h2 className='text-[32px] leading-[34px] md:text-[48px] font-semibold text-btn md:leading-[60px] mb-2 lg:mb-8'>Analyze your sales and marketing leads</h2>
                    <p className='text-[16px] leading-[24px] text-btn'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    {
                        data.map((box,index)=>
                        {
                            return(
                                <div key={index+1000} className="flex items-center gap-3">
                                    <div className="bg-[#F4F5F7] h-[72px] w-[72px] flex justify-center items-center rounded-full">
                                        <FontAwesomeIcon icon={box.icon} className="text-2xl"/>
                                    </div>
                                    <div>
                                        <h2 className='text-[24px] font-normal'>{box.title}</h2>
                                        <h3 className='text-[18px]'>{box.desc}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}