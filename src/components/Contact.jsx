import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Harshan,\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n\n` +
      `Message:\n${form.message}\n\n` +
      `---\nSent from Harshan PV's Portfolio`
    );
    
    window.location.href = `mailto:harshanpv3@gmail.com?subject=${subject}&body=${body}`;
    
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-6'>
          <p className='text-secondary text-[17px] leading-[30px]'>
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>
          
          <div className='flex flex-col gap-4'>
            <a 
              href='mailto:harshanpv3@gmail.com?subject=Portfolio%20Contact'
              className='bg-tertiary py-4 px-8 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-secondary transition-colors text-center'
            >
              📧 Email Me: harshanpv3@gmail.com
            </a>
            
            <a 
              href='https://github.com/harshanx'
              target='_blank'
              className='bg-tertiary py-4 px-8 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-secondary transition-colors text-center'
            >
              🐙 GitHub: harshanx
            </a>
            
            <a 
              href='https://www.linkedin.com/in/harshan-p-v-520940297'
              target='_blank'
              className='bg-tertiary py-4 px-8 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-secondary transition-colors text-center'
            >
              💼 LinkedIn Profile
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
