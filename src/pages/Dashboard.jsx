import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Introcard from "../components/Introcard";
import Project from "../components/Project";
import Divider from "../components/Divider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const Dashboard = () => {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [password, setPassword] = useState("");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [service, setService] = useState("");
  const [url, setUrl] = useState("");
  const [repo, setRepo] = useState("");

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://portfolio-backend-pomn.onrender.com/api/login",
        { email, password },
        { withCredentials: true }
      );
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
      console.log("Login successful");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://portfolio-backend-pomn.onrender.com/api/project",
        { title, desc, date, image, service, url, repo },
        { withCredentials: true }
      );
      console.log("Project created:", response.data.project);
      // Show success message
      alert("Project created successfully!");
      // Clear form fields
      setTitle("");
      setDesc("");
      setDate("");
      setImage("");
      setService("");
      setUrl("");
      setRepo("");
      // Redirect to /projects
      navigate("/projects");
    } catch (error) {
      console.error("Project creation error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "desc":
        setDesc(value);
        break;
      case "date":
        setDate(value);
        break;
      case "image":
        setImage(value);
        break;
      case "service":
        setService(value);
        break;
      case "url":
        setUrl(value);
        break;
      case "repo":
        setRepo(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full">
      <Introcard name={"Dashboard"} />

      <div className="px-8 lg:px-24 py-5 lg:py-10 flex flex-col gap-10">
        <AnimatedDiv>
          {isLoggedIn ? (
            <>
              <div className="p-4 flex flex-col border border-zinc-800 rounded-lg ">
                <h1 className="text-3xl">Add Project</h1>
                <hr className="w-full bg-zinc-800 h-0.5 my-4" />
                <form
                  onSubmit={handleProjectSubmit}
                  className="p-4 flex flex-col gap-4 border border-zinc-800 rounded-lg"
                >
                  <input
                    type="text"
                    name="title"
                    value={title}
                    placeholder="Project Title"
                    className="bg-transparent border border-zinc-800 p-2 text-lg rounded-md"
                    onChange={handleChange}
                  />
                  <textarea
                    type="text"
                    name="desc"
                    value={desc}
                    placeholder="Project Description"
                    className="bg-transparent border border-zinc-800 p-2 text-lg rounded-md"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="image"
                    value={image}
                    placeholder="Project Image Url"
                    className="bg-transparent border border-zinc-800 p-2 text-lg rounded-md"
                    onChange={handleChange}
                  />
                  <input
                    type="date"
                    name="date"
                    value={date}
                    placeholder="Project Date"
                    className="bg-transparent border border-zinc-800 p-2 text-lg rounded-md"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="service"
                    value={service}
                    placeholder="Project Service"
                    className="bg-transparent border border-zinc-800 p-2 text-lg rounded-md"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="url"
                    value={url}
                    placeholder="Project Link"
                    className="bg-transparent border border-zinc-800 p-2 text-lg rounded-md"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="repo"
                    value={repo}
                    placeholder="Project Github"
                    className="bg-transparent border border-zinc-800 p-2 text-lg rounded-md"
                    onChange={handleChange}
                  />
                  <input
                    type="submit"
                    className="submitBtn bg-transparent border-2 border-zinc-800 p-2 text-lg rounded-md hover:bg-zinc-700  cursor-pointer mt-4"
                  />
                </form>
              </div>
              <Divider name="Preview" />
              <AnimatedDiv>
                <Project
                  title={title}
                  desc={desc}
                  date={date}
                  image={image}
                  service={service}
                  url={url}
                  repo={repo}
                />
              </AnimatedDiv>
            </>
          ) : (
            <form
              onSubmit={handleLogin}
              className="p-4 flex flex-col gap-4 border border-zinc-800 rounded-lg"
            >
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                className="bg-transparent border border-zinc-800 p-2 text-lg rounded-md"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                className="bg-transparent border border-zinc-800 p-2 text-lg rounded-md"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="submit"
                value="Login"
                className="submitBtn bg-transparent border-2 border-zinc-800 p-2 text-lg rounded-md hover:bg-zinc-700 cursor-pointer mt-4"
              />
            </form>
          )}
        </AnimatedDiv>
      </div>
    </div>
  );
};

export default Dashboard;
