import React from 'react'
import first from '../../public/first.svg'
import Link from 'next/link'
import logo from '../../public/logo.svg'
import Image from 'next/image'
import Button from '../shared/Button'
import Setting from '../../public/setting.svg'
export default function Header() {
  return <>
   <main className=' bg-[#00070066] px-4 flex justify-between  items-center pt-[20px]  pr-[24px] pb-[20px] pl-[24px] font-urbitsan opacity-[90%]' >


<div >
<Image
        src={logo}
        alt="image"
        width={150}
        height={150}
        className="cursor-pointer"
      />

</div>
     

    <ul className=" justify-center font-semibold items-center text-base gap-x-12  flex font-urbitsan  ">
      <Link href={"/"}>Home</Link>
      <Link href={"/Create"}>Create Player</Link>
      <Link href={"/Leaderboards"}>Leaderboards</Link>
      <Link href="/Pay">Pay Now</Link>
       <Link href={'/Connect'}> <Button Text='Connect Wallet' /></Link> 
       <Image     
        src={Setting}
        alt="image"
        width={30}
        height={30}
        className="cursor-pointer"
      />

    
    </ul>



</main>  
  </>
}
