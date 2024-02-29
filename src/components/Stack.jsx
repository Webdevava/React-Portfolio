import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const icons = [
  "https://skillicons.dev/icons?i=js",
  "https://skillicons.dev/icons?i=react",
  "https://skillicons.dev/icons?i=bash",
  "https://skillicons.dev/icons?i=git ",
  "https://skillicons.dev/icons?i=java  ",
  "https://skillicons.dev/icons?i=jquery  ",
  "https://skillicons.dev/icons?i=laravel ",
  "https://skillicons.dev/icons?i=linux   ",
  "https://skillicons.dev/icons?i=mongodb ",
  "https://skillicons.dev/icons?i=mysql ",
  "https://skillicons.dev/icons?i=nextjs  ",
  "https://skillicons.dev/icons?i=nodejs  ",
  "https://skillicons.dev/icons?i=php ",
  "https://skillicons.dev/icons?i=postgres  ",
  "https://skillicons.dev/icons?i=py  ",
  "https://skillicons.dev/icons?i=tailwind  ",
];

const Stack = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  if (inView) {
    controls.start((i) => ({
      y: "0",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        stiffness: 500,
        damping: 15,
        delay: i * 0.15, // Delay each icon by 0.1s
      },
    }));
  }

  return (
    <div className="px-8 py-12 lg:p-12">
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 place-items-center">
        {icons.map((icon, index) => (
          <motion.div
            ref={ref}
            key={index}
            custom={index}
            initial={{ y: "100%", opacity: 0 }}
            animate={controls}
            className="p-2 border border-zinc-800 rounded-lg overflow-hidden w-fit"
          >
            <motion.img
              whileHover={{ scale: 1.35 }}
              src={icon}
              alt=""
              className="h-16 w-16 lg:h-24 lg:w-24 md:h-20 md:w-20  rounded-md grayscale hover:grayscale-0 "
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
