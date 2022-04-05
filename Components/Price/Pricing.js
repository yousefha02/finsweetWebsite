import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import infomonth from '../../Data/infomonth'
import infoyear from '../../Data/infoyear'
import { useState } from 'react'
 
export default function Pricing()
{
    const [change,setChange] =useState(true)
    const [months,setMonths]= useState(infomonth)
    const [years,setYears]= useState(infoyear)
    

    function click(id)
    {
        setMonths(back=>back.map(box=>
            {
                return box.id==id?{...box,on:true}:{...box,on:false}
            }))
        setYears(back=>back.map(box=>
            {
                return box.id==id?{...box,on:true}:{...box,on:false}
            }))
    }

    return(
        <div className='pt-[50px]'>
            <div className='contianer mx-auto py-[80px] px-6'>
            <div className='text-center w-[530px] max-w-full m-auto'>
                <h2 className='text-[32px] leading-[34px] xl:text-[56px] xl:leading-[61px] font-semibold mb-3'>Pricing plans that suit you</h2>
                <p className='text-[16px] leading-5 lg:text-[18px] lg:leading-[27px] mb-4 text-btn'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className='bg-[#E0E4FC] h-[72px] w-[312px] m-auto flex items-center rounded-[20px] px-2 mb-8'>
                    <button onClick={()=>setChange(true)} className={`h-[56px] w-[155px] rounded-[12px] ${change?"bg-btn text-white":" bg-transparent text-btn"} duration-200`}>Monthly</button>
                    <button onClick={()=>setChange(false)} className={`h-[56px] w-[155px] rounded-[12px] ${!change?"bg-btn text-white":" bg-transparent text-btn"} duration-200`}>Yearly</button>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    (change?months:years).map((box,index)=>
                    {
                        return <div onClick={()=>click(box.id)} className={`rounded-[24px] py-10 relative ${box.on?"bg-[#F0F2FE]":"bg-[#fff]"} duration-200`} key={index+400}>
                            <div className=' border-b-[1px] border-[#D8D8D8] pb-5'>
                                <div className='flex items-center gap-5 px-10'>
                                    <span className='bg-[#E6E6E6] w-[54px] h-[54px] flex items-center justify-center rounded-full'><FontAwesomeIcon icon={box.icon} className="text-[20px]"/></span>
                                    <div>
                                        <h2 className='text-[36px] font-semibold text-btn'>{box.title}</h2>
                                        <h4 className='text-[16px] opacity-50'>{box.desc}</h4>
                                    </div>
                                </div>
                            </div>
                                <div className='px-10 pt-5'>
                                    {
                                        box.info.map((ele,index)=>
                                        {
                                            return <div key={index+500} className="mb-5 flex text-[16px] text-btn"><span className='bg-[#D5F5EA] flex items-center justify-center w-[24px] h-[24px] rounded-full mr-3'><FontAwesomeIcon icon={faCheck} className="text-[12px]"/></span> {ele}</div>
                                        })
                                    }
                                </div>
                               <div className='px-10 text-center'>
                                    <h3 className='mb-10'>{box.text}</h3>
                                    <h2 className='text-[36px] font-semibold text-btn'>{box.price}</h2>
                                    <p className='text-btn text-[12px] opacity-50 mb-6'>{box.period}</p>
                                    <button className="bg-btn text-white w-[144px] rounded-xl text-[16px] h-[56px] hover:bg-[#313852] duration-300">Get Strated</button>
                               </div>
                               <div className='pricing -z-40 absolute w-full h-full top-0 left-0 max-w-full'></div>
                            </div>
                        
                    })
                }
            </div>
                
            </div>
        </div>
    )
}