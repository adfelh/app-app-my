'use client'

import { FaFacebookF, FaTwitter , FaYoutube  } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import CustomButtum from "./CustomButtum"

import {motion} from 'framer-motion'
import { fadeIn } from '@/lib/variants'


const trainerData = [
  {
    image: "/assets/img/trainers/david.jpg",
    name: "John Doe",
    role: "Trainer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    social: [
      {
        icon: <FaFacebookF />,  
        link: "https://facebook.com"
      },
      {
        icon: <FaTwitter />,  
        link: "https://twitter.com"
      },
      {
        icon: <FaYoutube />,  
        link: "https://youtube.com"
      },
    ],
  },
  {
    image: "/assets/img/trainers/matt.jpg",
    name: "John Doe",
    role: "Trainer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    social: [
      {
        icon: <FaFacebookF />,  
        link: "https://facebook.com"
      },
      {
        icon: <FaTwitter />,  
        link: "https://twitter.com"
      },
      {
        icon: <FaYoutube />,  
        link: "https://youtube.com"
      },
    ],
  },
  {
    image: "/assets/img/trainers/rosy.jpg",
    name: "John Doe",
    role: "Trainer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    social: [
      {
        icon: <FaFacebookF />,  
        link: "https://facebook.com"
      },
      {
        icon: <FaTwitter />,  
        link: "https://twitter.com"
      },
      {
        icon: <FaYoutube />,  
        link: "https://youtube.com"
      },
    ],
  },
  {
    image: "/assets/img/trainers/sofia.jpg",
    name: "John Doe",
    role: "Trainer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    social: [
      {icon: <FaFacebookF/>, link: "https://facebook.com"},
      {icon: <FaTwitter/> , link: "https://twitter.com"},
      {icon: <FaYoutube/> , link: "https://youtube.com"},
    ],
  },
]
const Team = () => {
  return (
    <section className='py-12 xl:h-[110vh]' id='team'>
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className="text-center h2 mb-6">Team</motion.h2>
        <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        
        className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-12 mb-12 ">
        {
          trainerData.map((trainer, index) => {
            return (
              <motion.div 
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.5}}
              
              className="flex flex-col items-center gap-4 justify-center border hover:bg-black/100 duration-500 hover:text-white  "
               key={index}>
                <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.2}}
                
                className="relative w-[320px] h-[360px] mx-auto mb-4" >
                  <Image  src={trainer.image} fill  alt="qqq" className=" hover:scale-105 duration-500  hover:rotate-12 "/>
                </motion.div>
                <h4 className="h4 mb-2">{trainer.name}</h4>
                <p className="text-accent">{trainer.role}</p>
                <p className="mb-6">{trainer.description}</p>
                <div className="flex gap-12 justify-center" >
                  {
                    trainer.social.map((social, index) => {
                      return (
                        <div key={index} className="flex items-center gap-4 mb-2 text-lg">

                      <Link href={social.link} className="hover:text-accent duration-300">
                    {social.icon}
                      </Link>
                        </div>
                      )
                    })
                  }
                </div>
              </motion.div>
            )
          })
        }

        </motion.div>
          <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.5}}>
          <CustomButtum text="View All" containerStyles=" w-[196px] h-[62px]" />

          </motion.div>
      </div>
    </section>
  )
}

export default Team