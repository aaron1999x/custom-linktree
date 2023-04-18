import Image from "next/image"
import data from '../../data.json'
import React from "react";
import {FaTwitter, FaGithub, FaFacebook , FaInstagram} from 'react-icons/fa';
import {CiShare1} from 'react-icons/ci'
import Modal from "@/components/Modal";
import QRCode from "react-qr-code";

function LinkCard({href,title,image}) {
  return(
    <a href={href} className='flex items-center p-1 w-full rounded-md hover:scale-105 transition-all border border-gray-300 mb-3 bg-gray-100 max-w-3xl ' >
      <div className='flex items-center text-center w-full'>
        <div className='w-10 h-10'>
          {image &&(
            <Image className='rounded-sm'
              src={image}
              width={40}
              height={40}
              alt={title}
            />
          )}
        </div>
        <h2 className=' flex justify-center font-semibold text-gray-800 w-full -ml-10 text-sm md:text-lg ' >{title}</h2>
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
      <div className=' flex justify-end items-center mt-4 mx-2'>
        {/* <label className="relative inline-flex cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer"></input>
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
        </label> */}
        <a className=" py-2 px-4" onClick={openModal}>
          <CiShare1 size={25} color={"#9ffd32"}/>
        </a>
      </div>
      <div className='flex flex-col items-center justify-center mx-auto w-full mt-16 px-8'>
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
            </a>
          ))}
        </div>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <p className="mt-2 text-black">Scan Here</p>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={"https://linktree-aaron.vercel.app/"}
            viewBox={`0 0 256 256`}
          />
        </Modal>

      </div>
    </>
  )
}
