import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {

    const projects = [
        {
            image: "/images/p1.jpg",
            title: "Modern Finance Dashboard UI",
            category: "Apps , UI/UX",
            link: "https://your-project-link-1.com"
        },
        {
            image: ,
            title: "Password Manager ",
            category: "Branding , Motion",
            link: "https://passop-mongo-phi.vercel.app/"
        },
        {
            image: "/images/p3.jpg",
            title: "Gym Website",
            category: "Branding , UI/UX",
            link: "https://gym-website31.vercel.app/"
        },
        {
            image: "/images/p4.jpg",
            title: "SaaS Dashboard Development",
            category: "Apps , UI/UX",
            link: "https://your-project-link-4.com"
        }
    ]

    return (
        <div className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                A small selection of recent <br />
                <span className='text-cyan-300'>projects</span>
            </h1>

            <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>

                {projects.map((project, index) => (
                    <Link
                        href={project.link}
                        target="_blank"
                        key={index}
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                        data-aos-delay={index * 100}
                        className='block group'
                    >
                        <Image
                            src={project.image}
                            alt='project image'
                            width={800}
                            height={650}
                            className='rounded-lg group-hover:scale-105 transition-all duration-300'
                        />

                        <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                            {project.title}
                        </h1>

                        <h1 className='pt-2 font-medium text-white/80'>
                            {project.category}
                        </h1>
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default Projects