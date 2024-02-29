import { motion } from "framer-motion";

const Introcard = ({ name, image }) => {
  return (
    <div className="px-8 py-10 lg:px-24">
      {!image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="flex justify-start items-end border border-zinc-800 rounded-md h-72 lg:h-96 p-4 bg-radial-pattern"
        >
          <motion.h1
            initial={{ y: '-500%'}}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-6xl"
          >
            {name}
          </motion.h1>
        </motion.div>
      )}

      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="w-full border border-zinc-800 rounded-xl flex flex-col-reverse lg:flex-row lg:p-5 gap-4 h-fit mb-6 p-4 bg-radial-pattern"
        >
          <motion.div
            style={{ flex: 3 }}
            className="texts flex  justify-start items-end "
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h1 className="lg:text-7xl text-4xl my-2">{name}</h1>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="myimage border border-zinc-800 rounded-md bg-zinc-900 overflow-hidden"
          >
            <img
              src={image}
              alt="profile pic"
              className="object-cover max-h-96 w-full grayscale"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Introcard;
