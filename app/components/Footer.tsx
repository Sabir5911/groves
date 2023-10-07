import React from 'react'
import Image from 'next/image'
import {FaTwitter} from 'react-icons/fa'
import {BiLogoDiscordAlt} from 'react-icons/bi'
import {LiaTelegramPlane} from 'react-icons/lia'
import {AiOutlineMail} from 'react-icons/ai'
import logo from '../../public/logo.svg'
import Link from 'next/link'
export default function Footer() {
  return<>
<main className='bg-[#000700]'>

    <div className='flex justify-around flex-wrap pt-[64px] pr-[24px] pb-[64px] pl-[24px] gap-[40px] w-[1440px] ' > 
        {/* //first box */}
        <div>
            <Image src={logo} width={166} height={67} alt='logo' />

        </div>
        {/* //second box? */}
        <div >
            <ol className='flex flex-col justify-center gap-y-4 text-base '>
                <Link href={'/Li'} className='text-[#585858] font-bold'>EXPLORE</Link>
                <Link href={'/Li'}>Home</Link>
                <Link href={'/Li'}>Features</Link>
                <Link href={'/Li'}> Play Now</Link>

            </ol>

        </div>
{/* /// */}
<div >
            <ol className='flex flex-col justify-center gap-y-4 text-base '>
                <Link href={'/Li'} className='text-[#585858]'>ABOUT US</Link>
                <Link href={'/Li'}>On Chain Games</Link>
                <Link href={'/Li'}>Partners</Link>
                <Link href={'/Li'}>  Careers</Link>

            </ol>

        </div>
        {/* // */}
        <div >
            <ol className='flex flex-col justify-center gap-y-4 text-base '>
                <Link href={'/Li'} className='text-[#585858]'>LEGAL</Link>
                <Link href={'/Li'}>Terms & Conditions</Link>
                <Link href={'/Li'}>Privacy Policy</Link>
                <Link href={'/Li'}> Cookie Policy</Link>

            </ol>

        </div>
{/* //// */}
<div >
            <ol className='flex flex-col justify-center gap-y-4 text-base'>
                <Link href={'/Li'} className='text-[#585858]'>LINKS</Link>
                <div className='flex gap-x-3  '>
                <Link href={'/FaTwitter'} ><FaTwitter size={'25px'}	 /></Link>
                <Link href={'/BiLogoDiscordAlt'}><BiLogoDiscordAlt size={'25px'}	 /></Link>
                <Link href={'/LiaTelegramPlane'}> <LiaTelegramPlane  size={'25px'}	/></Link>
                <Link href={'/AiOutlineMail'}><AiOutlineMail  size={'25px'}	/></Link>
                </div>
                

            </ol>

        </div>


    </div>
<hr  className='' />
<div className='flex justify-center pt-5 pb-16 text-[#D9D9D9]'>
    <h2>©2023 On Chain Games Inc - All rights reserved.</h2>
    </div>    
    
    
    </main>  
  </>
}
