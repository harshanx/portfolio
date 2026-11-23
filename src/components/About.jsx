import React from "react";

import { motion } from "framer-motion";



import { styles } from "../styles";

import { services } from "../constants";

import { SectionWrapper } from "../hoc";

import { fadeIn, textVariant } from "../utils/motion";



const ServiceCard = ({ index, title, icon }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='xs:w-[250px] w-full'
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div 
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-transform duration-300'
          style={{
            transform: isHovered ? 'perspective(1000px) rotateX(10deg) rotateY(-10deg)' : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
          }}
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};



const About = () => {

  return (

    <>

      <motion.div variants={textVariant()}>

        <p className={styles.sectionSubText}>Introduction</p>

        <h2 className={styles.sectionHeadText}>Overview.</h2>

      </motion.div>



      <motion.p

        variants={fadeIn("", "", 0.1, 1)}

        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'

      >

        I'm a Computer Science undergraduate at Government Engineering College, Palakkad,
        graduating in 2027. I build database-backed web and mobile applications, with hands-on
        experience in Python, FastAPI, REST APIs, Supabase, Firebase, and Flutter. During my
        accessibility-focused internship, I tested real user flows, documented defects, and
        worked with developers to improve product quality.

      </motion.p>



      <div className='mt-20 flex flex-wrap gap-10'>

        {services.map((service, index) => (

          <ServiceCard key={service.title} index={index} {...service} />

        ))}

      </div>

    </>

  );

};



export default SectionWrapper(About, "about");

