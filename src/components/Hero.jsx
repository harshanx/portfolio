import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[60px] xs:top-[80px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-2 sm:gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-2 sm:mt-5'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 h-20 xs:h-30 sm:h-40 md:h-60 lg:h-80 violet-gradient' />
        </div>

        <div className='flex-1'>
          <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
            Hi, I'm <span className='text-[#915EFF]'>Harshan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-1 sm:mt-2 text-white-100 leading-snug`}>
            BTech CSE Student <br className='xs:block hidden' />
            & Flutter Developer <br className='xs:block hidden' />
            exploring <br className='xs:block hidden' />
            Cybersecurity & AI
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-5 sm:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
