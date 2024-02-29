import React, { useEffect, useState } from 'react'

import Hero from '../components/Hero'
import BottomNav from '../components/BottomNav'
import Project from '../components/Project'
import Footer from '../components/Footer'
import Stack from '../components/Stack'
import Faq from '../components/Faq'
import LetsConnect from '../components/LetsConnect'
import Divider from '../components/Divider'
import axios from 'axios'
import { Frown } from 'lucide-react'

const HomePage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/project')
      .then((response) => {
        setProjects(response.data.projects);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='w-screen min-h-screen overflow-x-hidden overflow-y-scroll'>
   <Hero/>
   <Divider name="Selected Work"/>
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
   <Divider name="My Stack"/>
   <Stack/>
  <Divider name="FAQs"/>
   <Faq/>
   <LetsConnect/> 
    </div>
  )
}

export default HomePage
