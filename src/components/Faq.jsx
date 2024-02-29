import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const Faq = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  const [isOpen, setIsOpen] = useState(-1);

  const handleOpen = (index) => {
    setIsOpen((prev) => (prev === index ? -1 : index));
  };

  const faqs = [
    {
      question: "What is your approach to website development?",
      answer:
        "My approach to web development is focused on creating scalable and efficient web applications. I follow best practices for MongoDB, Express.js, React, and Node.js, ensuring that the application is well-structured and performs optimally.",
    },
    {
      question: "What types of projects have you worked on?",
      answer:
        "I have worked on a variety of projects, including e-commerce websites, social media platforms, and business management tools. My experience spans across different industries, allowing me to tackle diverse project requirements.",
    },
    {
      question: "How do you collaborate with clients and teams?",
      answer:
        "In projects, I collaborate closely with clients and teams to ensure that the development process is transparent and efficient. I use collaborative tools for communication and feedback, and I prioritize regular updates and discussions.",
    },
    {
      question: "Can you customize your services to fit our project needs?",
      answer:
        "Yes, I can customize my services to align with the specific needs and goals of your project. Whether it's implementing unique features or integrating third-party services, I can tailor my approach to meet your requirements.",
    },
    {
      question: "What is your availability for new projects?",
      answer:
        "My availability for new projects depends on my current workload. However, I am always open to discussing new opportunities. Feel free to reach out, and we can discuss your project timeline and requirements.",
    },
    {
      question: "How can we start a project with you?",
      answer:
        "To start a project with me, please contact me through the [Contact Me] section on my portfolio. Provide some details about your project, and I'll get back to you to schedule a consultation and discuss the next steps.",
    },
];

  const faqVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: index * 0.2 },
    }),
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="px-8 py-12 lg:p-12">
      {faqs.map((faq, i) => (
        <div key={i} ref={ref}>
          <motion.div
            className="mt-4 cursor-pointer flex justify-between items-center border border-zinc-800 text-2xl p-4 rounded-md"
            onClick={() => handleOpen(i)}
            variants={faqVariants}
            initial="hidden"
            animate={controls}
            custom={i}
          >
            <h1 className=" ">{i + 1}. {" "}{faq.question}</h1>
            {isOpen === i ? <ChevronUp /> : <ChevronDown />}
          </motion.div>
          {isOpen === i && (
            <motion.p
              className="border border-zinc-800 mb-2 rounded-md p-3 text-lg text-neutral-600"
              initial={{ opacity: 0, height: "auto" }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {faq.answer}
            </motion.p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
