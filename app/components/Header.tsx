import React from 'react'
import first from '../../public/first.svg'
import Link from 'next/link'
import logo from '../../public/logo.svg'
import Image from 'next/image'
import Button from '../shared/Button'
import Setting from '../../public/setting.svg'
export default function Header() {
  return <>
   <main className='pt-7   bg-[#12121266] ' >

<div className="  flex  justify-around items-center mb-3 ">

<div  className='mb-3'>
<Image
        src={logo}
        alt="image"
        width={150}
        height={150}
        className="cursor-pointer"
      />

</div>
     

    <ul className=" justify-center items-center text-base gap-x-8 font-medium hidden lg:flex pb-5">
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



</div>
</main>  
  </>
}
