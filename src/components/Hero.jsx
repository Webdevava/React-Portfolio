import myImage from "../assets/ankur.jpeg";
import { Dot } from "lucide-react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.175]); 

  return (
    <motion.div
    
      style={{ scale }}
      className="px-8  lg:px-16 py-10 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="w-full border border-zinc-800 rounded-xl flex flex-col-reverse lg:flex-row p-2 lg:p-5 gap-4 h-fit mb-12"
      >
        <div
          style={{ flex: 3 }}
          className="texts flex flex-col justify-between gap-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col border border-zinc-800 rounded-md p-4"
          >
            <h1 className="lg:text-7xl text-4xl my-2">Hey! I&apos;m Ankur</h1>
            <hr className="border-zinc-500 my-3" />
            <h2 className="lg:text-5xl text-3xl text-zinc-600 my-2 font-medium ">
              I Design the Web!
            </h2>
          </motion.div>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="intro p-4 text-lg text-zinc-600 font-medium border border-zinc-800 rounded-md"
          >
            I&apos;m a passionate and dedicated web developer with a love for crafting
            innovative digital solutions and bringing creative ideas to life
            through code.
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="p-2 w-full work flex justify-between border border-zinc-800 rounded-md"
          >
            <span 
            className="flex items-center text-md lg:text-xl">
              <Dot className="animate-blink" color="green" size={40} />
              Available for Work
            </span>
            <Link to={'/contact'} className="border border-zinc-800 px-6 py-1 text-md lg:text-xl rounded-md">
              Let&apos;s Connect!
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="myimage border border-zinc-800 rounded-md bg-zinc-900 overflow-hidden"
        >
          <img
            src={myImage}
            alt="profile pic"
            className="object-cover max-h-96 w-full grayscale"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
