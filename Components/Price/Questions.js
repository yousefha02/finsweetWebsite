import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import questions from "../../Data/questions"
import React, { useState } from 'react'
export default function Questions()
{
    const [ques,setQues] = useState(questions)

    function click(id)
    {
        setQues(back=>back.map(box=>box.id==id?{...box,on:!box.on}:{...box,on:false}))
    }

    return(
        <div className="container mx-auto px-6 py-[80px] ">
            <div className="bg-[#F0F2FE] rounded-[24px] p-8 flex justify-between md:flex-row flex-col gap-4">
                <div className='md:w-[35%] w-full'>
                    <h2 className="text-[32px] leading-[34px] md:text-[48px] font-semibold text-btn md:leading-[50px] mb-3 lg:mb-4">Frequestly Asked Questions</h2>
                    <p className="text-btn text-[16px] leading-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                </div>
                <div className="grid gap-4 w-[full] md:w-[55%]">
                    {ques.map((box,index)=>
                        {
                            return <div key={index+600} className="bg-[#fff] rounded-[24px] px-6 py-8">
                                        <div className="flex justify-between mb-3">
                                            <h3 className="text-[22px] lg:text-[24px] text-btn font-semibold">{box.question}</h3>
                                            <span onClick={()=>click(box.id)} className="text-[24px] cursor-pointer text-btn font-bold">{box.on?<FontAwesomeIcon icon={faMinus}/>:<FontAwesomeIcon icon={faPlus}/>}</span>
                                        </div>
                                        {box.on&&<p>{box.answer}</p>}
                                    </div>
                        })}
                </div>
            </div>
        </div>
    )
}