import React from 'react'
import Boxes from '../shared/Box'
import { data } from './data/data'
export default function Hero2() {
  return <>

      <div className="bg-[url(/wave.svg)]  bg-no-repeat -mt-20 bg-auto w-auto h-auto	 ">


        <div className=' flex-col justify-center items-center flex-wrap'>
            {/* this is the right box */}
            <div className='flex flex-col  justify-center items-center pt-60'>

            <h1 className='text-6xl font-bold'>Web3 Gaming: Redefined</h1>
<p className='max-w-xl text-center pt-8 text-base font-light text-[#CBCBCB]'>
Geoverse is a fully onchain, top-down RPG built on Solana. It offers an immersive gaming experience where players can explore a dynamic
 and procedurally generated universe. Geoverse incorporates multiple layers within its maps, including caves, landscapes, and buildings, 
 allowing for a rich and diverse gameplay environment.
</p>

            </div>
            {/* // this is the left box */}
            
            <div className='flex justify-center pt-16 gap-x-7 flex-wrap' >
    {data.map((elm)=>(
        <Boxes Header={elm.Header} discription={elm.discriptio}  image={elm.image} key={elm.id}  className='text-justify'/>
    ))}
</div>

        </div>

  </div>
  


  </>
}
