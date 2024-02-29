import image from "../assets/ankur.jpeg";
import Introcard from "../components/Introcard";
import LetsConnect from "../components/LetsConnect";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedDiv = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Percentage of the element's visibility
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  
  return (
    <div>
      <Introcard name={"About Me"} image={image} />

      <div className="px-8  lg:px-24 py-5 lg:py-10 flex flex-col gap-10">
      <AnimatedDiv>
      <div className="p-4 lex flex-col border border-zinc-800 rounded-lg ">
        <h1 className="text-3xl">Hey there! I&apos;m Ankur!</h1>
        <hr className="w-full bg-zinc-800 h-0.5 my-4" />
        <p className="text-lg font-semibold text-zinc-600">
          A Web developer on a mission to blend innovation with aesthetic finesse.
        </p>
      </div>
    </AnimatedDiv>
    <AnimatedDiv>
      <div className="p-4 lex flex-col border border-zinc-800 rounded-lg ">
        <h1 className="text-3xl">Innovation at the Core</h1>
        <hr className="w-full bg-zinc-800 h-0.5 my-4" />
        <p className="text-lg font-semibold text-zinc-600">
          In every project, I strive to infuse a spark of innovation. From conceptualizing sleek interfaces to devising user-centric solutions, my design philosophy rev
        </p>
      </div>
    </AnimatedDiv>
    <AnimatedDiv>
      <div className="p-4 lex flex-col border border-zinc-800 rounded-lg ">
        <h1 className="text-3xl">Crafting Digital Experiences</h1>
        <hr className="w-full bg-zinc-800 h-0.5 my-4" />
        <p className="text-lg font-semibold text-zinc-600">
          With a passion for pixels and a penchant for problem-solving, I navigate the ever-evolving landscape of digital design. My journey began with a curiosity about how technology intersects with creativity, and it&apos;s been a thrilling ride ever since.
        </p>
      </div>
    </AnimatedDiv>
      </div>

      <LetsConnect/>
    </div>
  );
};

export default About;
