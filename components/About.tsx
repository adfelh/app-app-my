'user client'
import { FaUsers } from "react-icons/fa6";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa";

import {motion} from "framer-motion"
import { fadeIn } from '@/lib/variants'
import Achievements from "./Achievements";

const featured =[
  {
    icon:<FaUsers className='text-5xl mb-4'/>,
    title:'Trusted by Thousands',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. '
  },
  {
    icon:<IoIosPricetag className='text-5xl mb-4'/>,
    title:'Cost Effective',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. '
  },
  {
    icon:<FaDumbbell className='text-5xl mb-4'/>,
    title:'Flexible Membership',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. '
  },

]
const About = () => {
  return (
    <section className='pt-8 pb-14 lg:pt-16 lg:pb-28' id='about'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2
            className='h2 text-center'>
            About Us
          </h2>
          <p className="max-w-[600px] mx-auto text-center mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Qui praesentium odio rem non assumenda tempore!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {
            featured.map((feature, index) =>{
              return <div className="flex flex-col items-center gap-4 justify-center border p-10 hover:border-accent duration-300" key={index}>
                <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center hover:rotate-12 duration-300">
                  {feature.icon}
                </div>
                <div className="flex flex-col items-center justify-center gap-2 text-center hover:rotate-12 duration-300" >
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            })
          }
        </div>
        <Achievements />
      </div>
    </section>
  )
}

export default About