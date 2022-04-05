import Image from 'next/image'
import infoPeople from '../../Data/infoPeople'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function People()
{
    return(
        <div>
            <div className='contianer mx-auto px-6 py-[80px] text-center'>
                <h2 className='text-[32px] leading-[34px] md:text-[48px] font-semibold text-btn md:leading-[60px] mb-4 lg:mb-8'>The stunning results ourcustomers have experienced</h2>
                <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
            clickable: true,
          }}
        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            infoPeople.map((box,index)=>
            {
                return (
                        <SwiperSlide key={index+1400}>     
                        <div className='rounded-3xl p-10 people'>
                        <p className='text-[18px] text-btn leading-[27px] mb-5'>{box.desc}</p>
                        <Image src={`/images/${box.image}`} width="56px" height="56px"/>
                        <h3 className='text-[20px] text-btn'>{box.name}</h3>
                        <h4 className='text-[12px]'>{box.job}</h4> 
                        </div>
                        </SwiperSlide>
                )
            })
        }
      </Swiper>
            </div>
        </div>
    )
}