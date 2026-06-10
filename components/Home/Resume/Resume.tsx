import React from 'react'
import ResumeCard from './ResumeCard'
import { BsDatabase } from 'react-icons/bs'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
    return (
        <div className='pt-20 pb-16'>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white '>Project <span className='text-cyan-200'>Experience</span></h1>

                    <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center">
                        <ResumeCard Icon={FaCodepen} role="Fresher"
                            description='Built responsive web applications using HTML, CSS, JavaScript, and React. Experienced with Git, REST APIs, debugging, and performance optimization while following modern frontend standards, accessibility guidelines, and writing clean, reusable, maintainable code. Collaborated on projects to translate UI designs into functional components, ensured cross-browser compatibility, and continuously enhanced skills through hands-on development and learning.
'
                        />

                    </div>
                </div>
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white '>My <span className='text-cyan-200'>Education</span>
                    </h1>
                    <div className='mt-10' data-aos="zoom-out" data-aos-anchor-placement="top-center"
                        data-aos-delay="300"
                    >
                        <div>
                            <ResumeCard Icon={FaReact} role="Bachelor in Computer Applications (BCA)"
                                date='Sep 2023 - June 2026'
                                description=' Passionate about frontend and full-stack development, applying classroom concepts to real-world projects and internships while continuously learning and adapting to modern web technologies.'
                            />

                        </div>
                        <ResumeCard Icon={BsDatabase} role="Certificate in Full-Stack Development"
                            date='March 2025 - Sep 2025'
                            description='Completed hands-on training in frontend and backend technologies, building responsive applications using modern frameworks, databases, APIs, and best development practices.'
                        />

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Resume
