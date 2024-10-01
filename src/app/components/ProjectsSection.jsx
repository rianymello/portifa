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
    gitUrl: "https://github.com/rianymello/ML-Curso",
    previewUrl: "/",
  },

  {
    id: 15,
    title: "Portifolio Web Designer",
    participation:"I collaborated on creating a portfolio using React.js and Tailwind.",
    image: "/images/projects/p11.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/rianymello/brunoportifolio",
    previewUrl: "https://brunoportifolio.vercel.app/",
  },
  
  {
    id: 17,
    title: "Portifolio Coding Student",
    participation:"I collaborated on creating a portfolio using HTML, CSS, and JavaScript.",
    image: "/images/projects/p9.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/rianymello/batportifolio",
    previewUrl: "https://pedrohenrique.vercel.app/",
  },

  {
    id: 8,
    title: "Student Association",  
    participation:"I served as team leader and developer during the execution of the website.",
    image: "/images/projects/p4.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/rianymello/listac",
    previewUrl: "/",
  },
  
  {
    id: 6,
    title: "Old Portfolio",
    participation:"In this project, I explored animations using CSS and started my knowledge in responsive web development.",
    image: "/images/projects/p1.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/rianymello/Portifolio-Next",
    previewUrl: "https://pedrohenrique.vercel.app/",
  },

  {
    id: 7,
    title: "Woman Pi",
    participation:"I was the leader of the development team for the project to create the website and establish an online presence for it.",
    image: "/images/projects/p2.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/rianymello/womanpi",
    previewUrl: "/",
  },

  {
    id: 14,
    title: "Smart Routes",
    participation:"I created an app using React Native designed to optimize routes and reduce congestion on the roads.",
    image: "/images/projects/pe3.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/rianymello/SmartRoute",
    previewUrl: "/",
  },
 
  {
    id: 10,
    title: "Old Portfolio",
    participation:"Project created with Next.js, Tailwind, and TypeScript used to store only my personal projects.",
    image: "/images/projects/p6.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/rianymello/Portifolio-Next",
    previewUrl: "https://portifolio-next-red.vercel.app/",
  },

  {
    id: 11,
    title: "Recreation of a Social Network Feed.",
    participation:"I recreated the interface of a social network that allows users to comment and like using React.js.",
    image: "/images/projects/p7.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/rianymello/React_Ignite",
    previewUrl: "https://react-ignite.vercel.app/",
  },

  {
    id: 12,
    title: "Palavras de Paz - Words of Peace",
    participation:"I was a volunteer developer for this NGO, working with Hooks, Next.js, and TypeScript. I created interfaces from designs in Figma and worked on responsiveness.",
    image: "/images/projects/p8.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/PalavrasDePaz/palavras-de-paz-web",
    previewUrl: "https://www.palavrasdepaz.org/",
  },

   {
    id: 2,
    title: "Ecological Footprint",
    participation:"In this project, I was the team leader and created the website using HTML, CSS, and JavaScript. ",
    image: "/images/projects/e2.png",
    tag: ["All", "School"],
    gitUrl: "https://github.com/rianymello/PegadaEcologica",
    previewUrl: "https://pegada-ecologica.vercel.app/",
  },

  {
    id: 9,
    title: "My Link Hub",
    participation:"I created a website with all my most important links using HTML, CSS, and JavaScript.",
    image: "/images/projects/p5.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/rianymello/devlinks",
    previewUrl: "https://rianylinks.vercel.app/",
  },

  {
    id: 4,
    title: "IT Technician",
    participation:"In this project, I programmed the website using HTML, CSS, and JavaScript.",
    image: "/images/projects/e4.png",
    tag: ["All", "School"],
    gitUrl: "https://github.com/rianymello/TecnicoCard",
    previewUrl: "",
  },
  
  {
    id: 4,
    title: "Brasa Hackaton",
    participation:"I developed an AI-powered application to help entrepreneurs manage finances by extracting data from scanned documents using OCR (Tesseract.js), generating financial graphs, recording sales, and controlling inventory.",
    image: "/",
    tag: ["All", "Peronal"],
    gitUrl: "https://github.com/rianymello/BrasaHack",
    previewUrl: "",
  },

  {
    id: 4,
    title: "Cultiva Mun",
    participation:"I create a website for the CultivaMUN project, dedicated to publishing articles on the environment and sustainability. The platform aims to promote awareness and share knowledge about sustainable practices and environmental preservation.",
    image: "/",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/rianymello/CultivaMun",
    previewUrl: "https://cultiva-mun.vercel.app/",
  },

  {
    id: 4,
    title: "WOW Bookstore",
    participation:"Website created with HTML, CSS, and JavaScript to evaluate the PSI module, featuring a video and a detailed description of the processes of an algorithm developed in C#",
    image: "/",
    tag: ["All", "Shool"],
    gitUrl: "https://github.com/rianymello/avalia-o",
    previewUrl: "https://livraria-wow.vercel.app/",
  },

  
  {
    id: 4,
    title: "Clube First",
    participation:"Fist Club, where I assisted in the design and coding of the website for this project that aims to engage IFAL students in extracurricular activities.",
    image: "/",
    tag: ["All", "Shool"],
    gitUrl: " https://github.com/GuigoAmadio/FirstClub",
    previewUrl: "https://guigoamadio.github.io/FirstClub/",
  },

  {
    id: 4,
    title: "Tecnovation Girls",
    participation:"Fist Club, where I assisted in the design and coding of the website for this project that aims to engage IFAL students in extracurricular activities.",
    image: "/",
    tag: ["All", "Shool"],
    gitUrl: " /",
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
