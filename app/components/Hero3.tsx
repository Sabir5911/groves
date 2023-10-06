import React from 'react'
import Boxes from '../shared/Box'
import Image from 'next/image'
import { data } from './data/data'
import wall from '../../public/wall.svg'

export default function Hero3() {
  return <>
  <div className="bg-[url(/Section-3-Background.png)]  pt-32  w-auto h-auto 	">


  <div className=' flex-col justify-center items-center '>
            {/* this is the right box */}

            <div className=' flex justify-center '>

            <h1 className='text-6xl font-semibold max-w-3xl tracking-wide	'>Experience the Gameplay, Discover A New World of Adventure </h1>
<p className='max-w-sm text-justify  text-base font-light'>
Embark on a grand quest in a realm where skills and exploration are the linchpins to unlocking boundless treasures. The Geoverse, our expansive game world, hides seven ancient keys, each a testament to a hero's valor and intellect. As a player, your journey begins with honing skills that are quintessential to navigating the challenges that lie ahead.
</p>

            </div>
            {/* // this is the left box */}
            
            <div className='flex justify-center py-36 '>
                <Image src={wall} height={535} width={1120} alt='play ' />
            </div>
           
        </div>
</div>
  </>
  
}
