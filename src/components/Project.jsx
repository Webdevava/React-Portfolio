import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img from "../assets/project.png";
import { MoveLeft } from "lucide-react";

const Project = ({ title, desc, date, image, service, url, repo }) => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  if (inView) {
    controls.start({
      x: 0,
      transition: {
        type: "spring",
        duration: 1.5,
        stiffness: 200,
        damping: 30,
        once: true,
        delay: 0.25,
      },
    });
  }

  return (
    <div className="px-8 py-12 lg:pl-24 relative">
      <motion.div
        ref={ref}
        initial={{ x: "100%" }}
        animate={controls}
        className="rounded-xl  flex border border-zinc-800  flex-col lg:flex-row project relative "
      >
        <a
          href={url}
          className="bg-black text-white p-3 rounded-full border border-white  items-center justify-center absolute projectBtn z-50 hidden lg:flex"
        >
          <MoveLeft fill="#fefefe" />
        </a>

        <a href={repo} className="image overflow-hidden flex-2 aspect-video imgContainer">
          <img
            src={image}
            alt="project pic"
            className="flex justify-between object-fill h-full max-h-screen w-full  transition-all duration-500 ease-in-out  contrast-100 hover:contrast-125 rounded-lg contrast"
          />
        </a>

        <div className="desc p-4 flex h-full w-full infoContainer">
          <div className="flex flex-col rounded-lg border border-zinc-800 p-2 gap-4">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Project</h2>
              <span className="rounded-lg border border-zinc-800 p-2 text-end text-zinc-600 font-medium mt-3 capitalize">
                {title}
              </span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Date</h2>
              <span className="rounded-lg border border-zinc-800 p-2 text-end text-zinc-600 font-medium mt-3">
                {date}
              </span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Service</h2>
              <span className="rounded-lg border border-zinc-800 p-2 text-end text-zinc-600 font-medium mt-3 capitalize">
                {service}
              </span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Description</h2>
              <span className="rounded-lg border border-zinc-800 p-2   text-zinc-600 font-medium mt-3 ">
                {desc}
              </span>
            </div>
            <a
              href={url}
              className="rounded-lg border border-zinc-800 p-2 flex items-center justify-center gap-2 text-xl  text-blue-600 font-medium mt-3 lg:hidden"
            >
              <MoveLeft />
              Live Preview
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
