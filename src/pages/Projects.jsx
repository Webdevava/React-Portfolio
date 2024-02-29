import React, { useEffect, useState } from "react";
import axios from "axios";
import Project from "../components/Project";
import LetsConnect from "../components/LetsConnect";
import Introcard from "../components/Introcard";
import { Frown } from "lucide-react";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/project/")
      .then((response) => {
        setProjects(response.data.projects);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="w-screen min-h-screen overflow-x-hidden overflow-y-scroll">
      <Introcard name="Projects" />
      {isLoading ? (
        <div className="w-full h-72 lg:h-96 flex justify-center items-center">
          <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-20 h-20 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-zinc-800 rounded-full"></div>
          </div>
        </div>
      ) : (
        projects.length === 0 ? (
          <div className=" h-72 lg:h-96 flex flex-col justify-center items-center gap-4 border border-zinc-800 rounded-lg w-1full">
          <Frown size={60}/>
            <p className="text-2xl">No projects to show!!!</p>
          </div>
        ) : (
          projects.map((project) => (
            <Project
              key={project._id}
              title={project.title}
              desc={project.desc}
              date={project.date}
              image={project.image}
              service={project.service}
              url={project.url}
              repo={project.repo}
            />
          )))
      )}
      <LetsConnect />
    </div>
  );
};

export default Projects;
