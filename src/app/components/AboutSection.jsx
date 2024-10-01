"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Git and Github</li>
        <li>HTML and CSS</li>
        <li> C and C#</li>
        <li>SQL</li>
        <li>Tailwind</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><a href="">Technical high school in management and programming of computer systems - ETAP escola profissional</a></li>
        <li> CS50 Introduction to Computer Science - Harvard University</li>
        <li>Ignite and Discovery courses - Rocketseat</li>
        <li>Course Responsive Web Design - FreeCodeCamp</li>
        <li>Machine Learning with Python - FreeCodeCamp</li>
        <li> Intro to Machine Learning - Kaggle</li>
        <li>#ElasNaIA - artificial intelligence mentoring </li>
        <li>Latin American Leadership Academy - LALA Bootcamp</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li><a className="dark:md:hover:text-fuchsia-600 underline" href="https://www.instagram.com/stemforwomenbr/">STEM for Woman</a> Founder & Web Development Team Leader</li>
        <li><a className="dark:md:hover:text-fuchsia-600 underline" href="#">Local Projects and NGOs</a>- Volunteer Dev & Tech Team Lead</li> 
        <li><a className="dark:md:hover:text-fuchsia-600 underline" href="https://www.jovenscientistasbrasil.com.br/"> JCB Jovens Cientistas Brasil </a> & <a className="dark:md:hover:text-fuchsia-600 underline" href="https://medium.com/@mello.riany">Medium </a>- Sci-Tech Article Writer</li>   
        <li><a className="dark:md:hover:text-fuchsia-600 underline" href="https://drive.google.com/drive/folders/1awehmxqgUmCAidU7TP5HQ3J5Kuw6Pzuc">Technovation Girls </a>- Volunteer Mentor </li>     
        <li><a className="dark:md:hover:text-fuchsia-600 underline" href="https://www.youtube.com/live/w9EQaTXztAI?si=pMrG12zmuxabnzNE"> GE - Geração de Entusiastas </a>- Leader, Choreographer, and Event Planner </li>      
        <li><a className="dark:md:hover:text-fuchsia-600 underline" href="https://latinamericanleadershipacademy.org/?gad_source=1&gclid=CjwKCAjw6c63BhAiEiwAF0EH1A9nJA_fbcC9xJ_P3xlx3na9LWnUmbKcBYvtupQSRj0S0Q_s0qAtVxoCXLoQAvD_BwE"> Latin American Leadership Academy </a> - Participant </li>      
        <li>Runner-up - Immerse Education Essay Competition<a className="dark:md:hover:text-fuchsia-600 underline" href="https://www.linkedin.com/in/rianymello/details/honors/1705861624055/single-media-viewer/?profileId=ACoAADLpTs4BRAOcLswUtScM_-OiwuiJRqD5ZJ4"> (2023)  </a> and <a className="dark:md:hover:text-fuchsia-600 underline" href="https://www.virtualbadge.io/certificate-validator?credential=2e6f92fb-577e-44ba-8284-7df8999a2174">(2024)</a> </li>      
        <li><a className="dark:md:hover:text-fuchsia-600 underline" href="https://drive.google.com/file/d/1UwsyP0IzbKPO9ti6SAX4Wk-bMianR6_0/view"> Uber Global Hackathon </a> - Regional Finalist  </li>      
        <li><a className="dark:md:hover:text-fuchsia-600 underline" href="https://drive.google.com/drive/folders/1awehmxqgUmCAidU7TP5HQ3J5Kuw6Pzuc"> Latin American Leadership Academy </a> - Participant </li>      
        <li>Qualified for the second stage in the<a className="dark:md:hover:text-fuchsia-600 underline" href="https://drive.google.com/drive/folders/1awehmxqgUmCAidU7TP5HQ3J5Kuw6Pzuc"> Brazilian Artificial Intelligence Olympiad </a> and the <a className="dark:md:hover:text-fuchsia-600 underline" href="https://www.sitestar.pt/"> Site Star Competition</a> </li>      
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a web developer with a passion for creating
            interactive and responsive websites.I am a quick learner and I am always
            looking to expand my knowledge and skill set.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
