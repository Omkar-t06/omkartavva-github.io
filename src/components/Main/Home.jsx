import React from 'react'
import SectionalCards from './SectionalCards'
import ReactTypingEffect from 'react-typing-effect'

function Home() {

  return (
    <SectionalCards sectionId={'home'}>
      <section className="flex flex-col lg:flex-row-reverse lg:justify-between items-center space-y-6 lg:space-y-0">
        <section className="flex justify-center shadow-lg shadow-orange-300 dark:shadow-slate-300 rounded-3xl border-solid border-off-white dark:border-light-cyan hover:border-orange-100 dark:hover:border-charcoal border-8 h-48 w-48 lg:h-64 lg:w-64">
          <img 
            src="https://user-images.githubusercontent.com/37551474/113611467-3a567d80-9657-11eb-862b-b07b4f105c6f.gif" 
            alt="profile"
            className="object-fill rounded-2xl h-auto w-auto"
          />
        </section>
        <section className="text-center lg:text-left w-full lg:w-1/2 text-3xl font-bold space-y-4">
          <h1 className='text-4xl'>Hi, I'm Omkar Tavva</h1>
          <ReactTypingEffect
            text={["An Engineering Student", "A Flutter Developer", "A Programmer", "A Tech Enthusiast"]}
            speed={150}
            eraseSpeed={100}
          />
          <p className='text-lg text-gray-700 dark:text-gray-300 mt-4'>
            Welcome to my personal site! I’m passionate about creating engaging and functional applications that solve real-world problems. Let’s build something amazing together!
          </p>
          <section className='mt-6 flex lg:justify-start justify-center'>
          <a 
            href="#about"
            className="mr-4 bg-teal-500 text-xl text-white py-2 px-4 rounded-lg shadow hover:bg-teal-600 transition"
          >
            Learn More About Me
          </a>
          <a
            href="/path-to-resume/Omkar_Resume.pdf" 
            download 
            className="bg-blue-500 text-xl text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Download My Resume
          </a>
          </section>
        </section>
      </section>
    </SectionalCards>
  )
}

export default Home