
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {

    const projects = [
        {
            image: "/images/social-media-app.png",
            title: "Social Media App",
            category: "Full-Stack MERN Application",
            description:
                "Developed a scalable social media platform featuring real-time messaging, notifications, stories, posts, user profiles, follow system, and secure authentication with Clerk.",
            tech: ["React", "Node.js", "Express.js", "MongoDB", "Clerk" , "Responsive Design"],
            link: "https://ping-up-eight-self.vercel.app/",
        },

         {
            image: "/images/url-shortener.png",
            title: "URL Shortener",
            category: "Full-Stack Next.js Application",
            description:
                "Built a modern URL shortening platform with MongoDB integration, custom short links, optimized performance, responsive design, and an intuitive user interface.",
            tech: ["Next.js", "MongoDB", "Tailwind CSS", "REST API"],
            link: "https://bitlinks-url-shortner-woad.vercel.app/",
        },

        {
            image: "/images/password-manager.png",
            title: "Password Manager",
            category: "Frontend Security Application",
            description:
                "Built a password management solution with CRUD functionality, local storage persistence, responsive UI, and seamless user experience for secure credential management.",
            tech: ["React", "JavaScript", "Tailwind CSS", "LocalStorage"],
            link: "https://password-manager-red-mu.vercel.app/",
        },

        {
            image: "/images/spotify-clone.png",
            title: "Spotify Clone",
            category: "Interactive Frontend Application",
            description:
                "Created a Spotify-inspired music streaming interface with dynamic album search, playlist browsing, music playback, and fully responsive design using vanilla JavaScript.",
            tech: ["HTML5", "CSS3", "Advanced JavaScript", "Responsive Design"],
            link: "https://spotify-clone-lake-seven.vercel.app/",
        },

        {
            image: "/images/gym-website.png",
            title: "Gym Website",
            category: "Responsive Business Website",
            description:
                "Designed and developed a modern fitness website featuring responsive layouts, smooth animations, interactive transitions, and EmailJS-powered contact functionality.",
            tech: ["React", "CSS3", "EmailJS", "Responsive Design"],
            link: "https://gym-website31.vercel.app/",
        },

       
    ];


    return (
        <section className="py-20">
            <div className="w-[90%] xl:w-[75%] mx-auto">
                {/* Heading */}
                <h1 className="text-center text-3xl md:text-5xl font-bold text-white">
                    My Recent{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                        Projects
                    </span>
                </h1>

                <p className="text-center text-white/60 mt-4 max-w-2xl mx-auto">
                    A collection of full-stack, frontend, and responsive web applications
                    built using modern technologies like MERN, Next.js, React, and
                    Tailwind CSS.
                </p>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    {projects.map((project, index) => (
                        <Link
                            href={project.link}
                            target="_blank"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group"
                        >
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300 h-full">

                                {/* Image */}
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={500}
                                        className="w-full h-[250px] object-cover group-hover:scale-110 transition-all duration-500"
                                    />

                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                        <span className="px-4 py-2 bg-cyan-500 text-white rounded-lg font-medium">
                                            View Project →
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <span className="text-cyan-400 font-bold text-sm">
                                        0{index + 1}
                                    </span>

                                    <h2 className="text-2xl font-bold text-white mt-2">
                                        {project.title}
                                    </h2>

                                    <p className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 rounded-full">
                                        {project.category}
                                    </p>

                                    <p className="text-white/70 text-sm mt-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Button */}
                                    <div className="mt-6">
                                        <span className="inline-flex items-center gap-2 text-cyan-300 font-medium">
                                            Live Demo →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

