"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
 
  
  {
    id: 16,
    title: "Rock Paper Scissors Machine Learning Model",
    participation:"I created a machine learning model designed to win 60% of the time against 4 pre-created players.",
    image: "/images/projects/pe3.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 15,
    title: "Portifolio Web Designer",
    participation:"I collaborated on creating a portfolio using React.js and Tailwind.",
    image: "/images/projects/p11.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 17,
    title: "Portifolio Coding Student",
    participation:"I collaborated on creating a portfolio using HTML, CSS, and JavaScript.",
    image: "/images/projects/p9.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Student Association",  
    participation:"I served as team leader and developer during the execution of the website.",
    image: "/images/projects/p4.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 6,
    title: "Old Portfolio",
    
    participation:"In this project, I explored animations using CSS and started my knowledge in responsive web development.",
    image: "/images/projects/p1.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Woman Pi",
   
    participation:"I was the leader of the development team for the project to create the website and establish an online presence for it.",
    image: "/images/projects/p2.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 14,
    title: "Smart Routes",
    participation:"I created an app using React Native designed to optimize routes and reduce congestion on the roads.",
    image: "/images/projects/pe3.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
 
  {
    id: 10,
    title: "Old Portfolio",
    participation:"Project created with Next.js, Tailwind, and TypeScript used to store only my personal projects.",
    image: "/images/projects/p6.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Recreation of a Social Network Feed.",
    participation:"I recreated the interface of a social network that allows users to comment and like using React.js.",
    image: "/images/projects/p7.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Palavras de Paz - Words of Peace",
    participation:"I was a volunteer developer for this NGO, working with Hooks, Next.js, and TypeScript. I created interfaces from designs in Figma and worked on responsiveness.",
    image: "/images/projects/p8.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 13,
    title: "Science and Technology Articles",
    participation:"I wrote articles about artificial intelligence, female presence in STEM, mathematics, and science.",
    image: "/images/projects/p10.jpg",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
   {
    id: 2,
    title: "Ecological Footprint",
    participation:"In this project, I was the team leader and created the website using HTML, CSS, and JavaScript. ",
    image: "/images/projects/e2.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "My Link Hub",
    participation:"I created a website with all my most important links using HTML, CSS, and JavaScript.",
    image: "/images/projects/p5.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "IT Technician",
    
    participation:"In this project, I programmed the website using HTML, CSS, and JavaScript.",
    image: "/images/projects/e4.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 1,
    title: "C Language Exercises",
    participation:"I created simple algorithms to solve problems presented in programming classes.",
    image: "/images/projects/e1.jpg",
    tag: ["All", "School" ],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "SQL Exercises",
    
    participation:"I created a database exploring concepts such as tables and columns.",
    image: "/images/projects/e3.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal"
          isSelected={tag === "Personal"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="School"
          isSelected={tag === "School"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              participation={project.participation}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
