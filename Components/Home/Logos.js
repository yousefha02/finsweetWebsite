import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVectorSquare} from "@fortawesome/free-solid-svg-icons"
import { faCapsules} from "@fortawesome/free-solid-svg-icons"
import { faComputer} from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Logos()
{
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const info =
    [
        {
            logo:faVectorSquare,
            title:"logoipsum"
        },
        {
            logo:faCapsules,
            title:"logoipsum"
        },
        {
            logo:faComputer,
            title:"logoipsum"
        },
        {
            logo:faVectorSquare,
            title:"logoipsum"
        },
        {
            logo:faCapsules,
            title:"logoipsum"
        },
    ]

    return(
        <div>
            <div className="conatiner  mx-auto px-6 py-[80px] text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5" data-aos="zoom-in">
                {
                    info.map((box,index)=>
                    {
                        return(
                            <div key={index+1300} className="flex items-center justify-center  text-btn text-[24px] font-semibold">
                                <FontAwesomeIcon icon={box.logo} className="text-[30px] text-btn mr-2"/>
                                {box.title}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}