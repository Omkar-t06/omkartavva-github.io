import React from 'react'
import SectionalCards from './SectionalCards'

function About() {
  return (
    <SectionalCards 
      sectionId={'about'}
      style='text-3xl font-bold flex flex-col items-center'
    >
        <h2>About Myself</h2>
        <p className='text-xl text-gray-700 dark:text-gray-300 mt-4 lg:w-1/2 text-center leading-relaxed'>
          I'm a Engineer student studying at Vignana Bharathi Institute of Technology. I have passion for developing and learning new technologies.
        </p>
        <section className='m-2 lg:w-3/4 p-2'>
          <hr className="my-6 border-t border-teal-500 dark:border-teal-200" />
          <h3 className='text-2xl font-semibold text-teal-600 dark:text-teal-300'>
            Skills & Technologies
          </h3>
          <section className="m-4 grid grid-cols-1 lg:grid-cols-2 text-lg gap-y-2 lg:gap-y-4">
            <ul className="list-disc list-inside space-y-2">
              <li>C</li>
              <li>Python</li>
              <li>Java/Kotlin</li>
              <li>Flutter-Dart</li>
              <li>Android Jetpack Compose</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>HTML-CSS-JS</li>
              <li>React</li>
              <li>Firebase</li>
              <li>Git-GitHub</li>
              <li>Postman</li>
            </ul>
          </section>
          <hr className="my-6 border-t border-teal-500 dark:border-teal-200" />
        </section>
        <p className='text-xl text-gray-700 dark:text-gray-300 mt-4 lg:w-1/2 text-center leading-relaxed'>
          I am deeply passionate about application development and the dynamic landscape of technology. Currently, I am actively engaged in learning and mastering Flutter & Android development. This journey allows me to continuously update and expand my knowledge, ensuring that I am well-equipped to contribute to and thrive in the ever-evolving field of technology.
        </p>
    </SectionalCards>
  )
}

export default About