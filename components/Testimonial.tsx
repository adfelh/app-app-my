"use client"
import Image from 'next/image'
import {FaQuoteLeft} from "react-icons/fa6"
import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const TestimonialData = [
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    name: "Lucy", 
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    name: "Lucy", 
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    name: "Lucy", 
  
  },
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    name: "Lucy", 
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    name: "Lucy", 
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    name: "Lucy", 
  
  },


]


import {motion} from 'framer-motion'
import { fadeIn } from '@/lib/variants'


const Testimonial = () => {
  return (
    <section className='py-12 xl:py-28' id='testimonial'>
      <div className="container mx-auto">
        <motion.h2 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} className='h2 text-center'>Testimonial</motion.h2>
        <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}}>
          <Swiper 
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
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
            className='h-[320px]'
          >
            {
              TestimonialData.map((person, index) => {
                return <SwiperSlide className='h-full' key={index}>
                  <div className='flex flex-col justify-center items-center gap-6 text-center h-full'>
                    <Image src={person.img} width={90} height={90} alt="" className="border-2 border-accent rounded-full " />
                    <div className='flex flex-col items-center justify-center'>
                      <FaQuoteLeft className='text-2xl text-gray-300' />
                      <p className='max-w-[380px] mb-4'>{person.message}</p>
                      <span className='text-2xl text-accent'>{person.name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              })
            }
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial