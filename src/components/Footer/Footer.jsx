import React from 'react';
import { SiDevdotto } from "react-icons/si";
import { GoMail } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import FooterIcon from './FooterIcon';

function Footer(props) {
  const {
    name,
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    twitter,
    youTube,
  } = props;

  return (
    <footer className='bg-ivory dark:bg-dark-navy flex flex-col justify-center items-center gap-10 pt-20 px-0 pb-12'>
        <section id='social-media-handles' className='flex justify-center gap-8'>
        {email && (
          <FooterIcon refLink={`mailto:${email}`} Icon={GoMail}/>
        )}
        {devDotTo && (
          <FooterIcon refLink={`https://dev.to/${devDotTo}`} Icon={SiDevdotto}/>
        )}
        {gitHub && (
          <FooterIcon refLink={`https://github.com/${gitHub}`} Icon={FaGithub}/>
        )}
        {instagram && (
          <FooterIcon refLink={`https://www.instagram.com/${instagram}`} Icon={FaInstagram}/>
        )}
        {linkedIn && (
          <FooterIcon refLink={`https://www.linkedin.com/in/${linkedIn}`} Icon={FaLinkedinIn}/>
        )}
        {medium && (
          <FooterIcon refLink={`https://medium.com/@${medium}`} Icon={FaMediumM}/>
        )}
        {twitter && (
          <FooterIcon refLink={`https://twitter.com/${twitter}`} Icon={FaXTwitter}/>
        )}
        {youTube && (
          <FooterIcon refLink={`https://www.youtube.com/c/${youTube}`} Icon={FaYoutube}/>
        )}
        </section>
        <p className='mt-0 text-teal dark:text-light-cyan'>&copy; Created By {name}</p>
    </footer>
  )
}

export default Footer