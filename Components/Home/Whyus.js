import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
export default function Whyus()
{
    const info=[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    ]

    return(
        <div>
            <div className="contianer mx-auto px-6 py-[80px] grid lg:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="title text-[24px] font-semibold">Why should you work with us?</h3>
                    <h2 className='text-[32px] leading-[30px] md:text-[48px] font-semibold text-btn md:leading-[60px] mb-2 lg:mb-8'>To upscale your business to the next level</h2>
                    <p className='text-[16px] leading-[24px] text-btn'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</p>
                </div>
                <div>
                    {
                        info.map((box,index)=>
                            {
                                return(
                                    <div key={index+1800} className='flex flex-wrap items-center text-[20px] mb-5'>
                                        <span className='bg-[#FFACAC] mr-3 text-btn w-[44px] h-[44px] rounded-full flex items-center justify-center'><FontAwesomeIcon className='text-xl' icon={faArrowRight}/></span>
                                        {box}
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}