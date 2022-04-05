import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faMessage } from "@fortawesome/free-solid-svg-icons"
export default function Message()
{
    const data = 
    [
        {
            icon:faPhone,
            title:"+ 1800 145 276",
            desc:"Free support"
        },
        {
            icon:faMessage,
            title:"finsweet@gmail.com",
            desc:"Help Email support"
        },
        {
            icon:faMessage,
            title:"sales@finsweet.com",
            desc:"Sales Enquiry"
        }
    ]

    return(
        <div className="container mx-auto px-6 pb-[160px] pt-[30px]">
            <div className="bg-[#F0F2FE] rounded-[24px] p-8 ">
                <h3 className='text-[32px] leading-[34px] md:text-[36px] md:leading-[43px] font-semibold text-btn mb-2'>Drop us a message</h3>
                <p className='text-btn text-[18px] mb-5'>We will get back to you as soon as possible.</p>
                <div className='flex justify-between md:flex-row flex-col gap-4'>
                <div className='w-full md:w-[50%] mb-4'>
                    <form>
                        <div className='grid grid-cols-2 gap-2 mb-5'>
                            <input type="text" placeholder="Full Name" className='h-[64px] rounded-[8px] p-4'/>
                            <input type="text" placeholder="Company Name" className='h-[64px] rounded-[8px] p-4'/>
                        </div>
                        <div>
                            <input type="email" placeholder="Work Email" className='h-[64px] rounded-[8px] p-4 w-full mb-5'/>
                        </div>
                        <div>
                            <input type="text" placeholder="Subject" className='h-[64px] rounded-[8px] p-4 w-full mb-5'/>
                        </div>
                        <div>
                            <textarea placeholder="Message" className='h-[148px] rounded-[8px] p-4 w-full mb-5'></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Send" className='bg-btn h-[56px] text-center w-full text-white rounded-[12px]'/>
                        </div>
                    </form>
                </div>
                <div className='w-full md:w-[45%] lg:w-[30%] flex flex-col gap-4'>
                    {
                        data.map((box,index)=>
                        {
                            return <div key={index} className="flex gap-4 items-center">
                                        <div className='bg-[#6B7CFF] w-[48px] h-[48px] rounded-full flex items-center justify-center'><FontAwesomeIcon icon={box.icon} className="text-white"/></div>
                                        <div>
                                            <h3 className='text-[18px] sm:text-[24px] font-semibold'>{box.title}</h3>
                                            <p className='text-[14px] sm:text-[16px] opacity-50'>{box.desc}</p>
                                        </div>
                                        </div>
                        })
                    }
                </div>
            </div>
            </div>
        </div>
    )
}