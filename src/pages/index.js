import Image from "next/image"
import data from '../../data.json'
import React from "react";
import {FaTwitter, FaGithub, FaFacebook , FaInstagram, FaLinkedin} from 'react-icons/fa';
import {CiShare1} from 'react-icons/ci'
import Modal from "@/components/Modal";
import QRCode from "react-qr-code";
import Link from "next/link";
import whatsapp from "../images/WhatsAppButtonGreenMedium.svg"
import MetaHead from "@/components/MetaHead";
import Script from "next/script";

function LinkCard({href,title,image}) {
  return(
    <a href={href} className='flex items-center p-3 md:p-2 w-full rounded-md hover:scale-105 transition-all border border-gray-300 mb-3 bg-gray-100 max-w-3xl'>
      <div className='flex items-center text-center w-full relative'>
        <div className='h-10 flex items-center absolute md:left-0 -left-2'>
          {image &&(
            <Image className='rounded-sm'
              src={image}
              width={40}
              height={40}
              alt={title}
            />
          )}
        </div>
        <h2 className=' flex justify-center font-semibold text-gray-800 w-full text-sm md:text-lg ' >{title}</h2>
      </div>
    </a>
  )
}

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MetaHead />
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-61PT7BRTKC'
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-61PT7BRTKC');
        `}
      </Script>
      <div className=' flex justify-end items-center mt-4 mx-2'>
        <a className=" py-2 px-4" onClick={openModal}>
          <CiShare1 size={25} color={"#9ffd32"}/>
        </a>
      </div>
      <div className='flex flex-col items-center justify-center mx-auto w-full mt-10 md:mt-12 px-8'>
        <Image className='rounded-full'
          src={data.avatar}
          width={96}
          height={96}
          alt={data.name}
          priority
        />
        <div className='mb-8'>
          <h1 className='font-bold mt-4 text-xl text-white text-center'>{data.name}</h1>
          <p className='mt-1 text-lg text-gray-500 text-center'>{data.position}</p>
        </div>
      
        {data.links.map((link)=>(
          <LinkCard key={link.href} {...link} />

        ))}
        <div className='flex items-center gap-4 mt-8'>
          {data.socials.map((link)=>(
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.href.includes('twitter') ? <FaTwitter size={35} className='hover:scale-110'/> : null}
              {link.href.includes('github') ?<FaGithub className='hover:scale-110' size={35} /> : null}
              {link.href.includes('instagram') ?<FaInstagram className='hover:scale-110' size={35} /> : null}
              {link.href.includes('facebook') ?<FaFacebook className='hover:scale-110' size={35} /> : null}
              {link.href.includes('linkedin') ?<FaLinkedin className='hover:scale-110' size={35} /> : null}
            </a>
          ))}
        </div>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <p className="mt-2 text-black">Scan Here</p>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={"https://aaron-linktree.vercel.app/"}
            viewBox={`0 0 256 256`}
          />
        </Modal>

        <div className="mt-5 flex justify-end items-center">
          <a aria-label="Chat on WhatsApp" href="https://wa.me/+60149810427"> <Image alt="Chat on WhatsApp" src={whatsapp} /></a>
        </div>
      </div>
      <footer className="w-full text-sm relative xl:absolute bottom-0 py-5">
        <div className="flex items-center justify-center">
          <p>
            Built by <a target="_blank" href="https://atys.dev/" className="font-medium underline underline-offset-2">Aaron</a>. Hosted on <a href="https://vercel.com/" target="_blank" className="font-medium underline underline-offset-2">Vercel</a>.
          </p>
        </div>
      </footer>
    </>
  )
}
