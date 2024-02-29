import React, { useState } from "react";
import Introcard from "../components/Introcard";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Faq from "../components/Faq";

const Contact = () => {

  const copyEmail = () => {
    navigator.clipboard.writeText("ankurauti@gmail.com");
  };

  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Introcard name={"Contact Me"} />
      <div className="flex flex-col w-full justify-center items-center px-8 py-12 lg:px-24 gap-10">
        <div className="p-4 border border-zinc-800 rounded-lg text-xl">
          <p>
            I&apos;m thrilled to connect with you! Whether you have a website
            project in mind, a collaboration proposal, or just want to chat
            about the fascinating world of internet, feel free to reach out.
          </p>
        </div>
        <div className="w-full p-4 border border-zinc-800 rounded-lg text-xl">
          <div className="flex flex-col">
            <span className="w-full">Email:</span>
            <h1
              className="text-3xl text-center w-fit self-center cursor-pointer relative"
              onClick={copyEmail}
              title="tap to capy"
            >
              ankurauti@gmail.com
              
            </h1>
          </div>
          <hr className="my-8" />
          <div className="flex flex-col gap-4">
            <span>Socials:</span>
            <div className="links flex justify-center items-center gap-4">
              <a
                href="https://github.com/webdevava"
                className="border border-zinc-800 rounded-md p-4 w-full flex justify-center"
              >
                <span>
                  <Github size={35} />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/ankur-auti-862953250"
                className="border border-zinc-800 rounded-md p-4 w-full flex justify-center"
              >
                <span>
                  <Linkedin size={35} />
                </span>
              </a>
              <a
                href="https://twitter.com/ankur_auti"
                className="border border-zinc-800 rounded-md p-4 w-full flex justify-center"
              >
                <span>
                  <Twitter size={35} />
                </span>
              </a>
              <a
                href="https://www.instagram.com/ankurauti382"
                className="border border-zinc-800 rounded-md p-4 w-full flex justify-center"
              >
                <span>
                  <Instagram size={35} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex border-b-2 border-zinc-700 px-20 ">
        <p className="text-5xl my-4 marby">FAQs</p>
      </div>
      <Faq />
    </div>
  );
};

export default Contact;
