import React from 'react'
import Image from 'next/image'
import col from '../../public/Col.svg'
export default function Hero4() {
  return (
    <div className='bg-[#000700]'>


<div className=' flex-col  '>
            {/* this is the right box */}

            <div className=' flex justify-center items-center flex-col '>

            <h1 className='text-6xl font-semibold max-w-3xl tracking-wide	'>Forge Your Legacy </h1>
<p className='max-w-xl text-center  text-base font-light pt-12'>
The wilderness is vast and the caves deep, each a realm of mysteries and guarded by creatures of old. The path to discovering the keys is laden with challenges that test your wit, courage, and the skills you've honed. Every cave explored, every puzzle solved, and every foe vanquished is a step towards the coveted keys.

</p>
<p className='max-w-xl text-center  text-base font-light pt-12'>
So, gear up, sharpen your skills, and set forth on an epic quest of exploration and discovery to find the ancient keys that unlock the heart of Geoverse. Your legend awaits!

</p>
            </div>
            {/* // this is the left box */}
            <div className='justify-center flex py-20 cursor-pointer'>
            <Image  src={col} width={1120} height={525} alt='picture'/>

            </div>
          
        </div>

    </div>
  )
}
