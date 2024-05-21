'use client'

import Image from "next/image"
import {MdClose} from "react-icons/md"
import {FaCheck} from "react-icons/fa6"
import CustomButtum from "./CustomButtum"
import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const MembershipSiderData = [
  {
    title: "Standard",
    price: "9.99",
    benefist: [
      {
        icon: <FaCheck/>,
        text: "includes membership benefits",
      }, 
      {
        icon: <FaCheck/>,
        text: "unlimited training",
      }, 
      {
        icon: <FaCheck/>,
        text: "free training sessions",
      },
      
    ], 
  },
  {
    title: "Standard",
    price: "9.99",
    benefist: [
      {
        icon: <FaCheck/>,
        text: "includes membership benefits",
      }, 
      {
        icon: <FaCheck/>,
        text: "unlimited training",
      }, 
      {
        icon: <FaCheck/>,
        text: "free training sessions",
      },
      
    ], 
  },
  {
    title: "Standard",
    price: "9.99",
    benefist: [
      {
        icon: <FaCheck/>,
        text: "includes membership benefits",
      }, 
      {
        icon: <FaCheck/>,
        text: "unlimited training",
      }, 
      {
        icon: <FaCheck/>,
        text: "free training sessions",
      },
      
    ], 
  },


]
const MembershipSider = () => {
  return (
    <Swiper
    slidesPerView={1}
    modules={[Pagination]}
    pagination={{clickable: true}}
    breakpoints={{
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
    }} 
    }
    className="min=h-[680px]"
    >
    {
      MembershipSiderData.map((item, index) => {
        return (<SwiperSlide key={index}>
          <div className="border border-accent hover:bg-primary-300/80
          transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto ">
          <div className="py-5 px-[60px] border-b border-accent ">
            <h4 className="h4 hover:text-white duration-300">{item.title}</h4>
          </div>
          <div className="py-[30px] px-[60px]">
            <ul className="flex flex-col gap-4 mb-7">
              {item.benefist.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-2">
                  <span className="text-accent text-lg">{item.icon}</span>
                      {item.text}
                    
                    
                  </li>
                )
              })}
            </ul>
            <p className="hover:text-accent duration-300 mb-8 flex gap-1 items-center">
              <sup className="text-4xl">$</sup>
              <strong className="text-6xl">{item.price}</strong>
              <em className="text-2xl self-end">/month</em>
            </p>
            <CustomButtum containerStyles="w-[196px] h-[62px]"
            text="buy now"
            />
          </div>
          </div>
        </SwiperSlide>)
      })
    }
    </Swiper>
  )
}

export default MembershipSider