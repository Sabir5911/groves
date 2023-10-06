import React from 'react'
import Boxes from '../shared/Box'
import { data } from './data/data'
export default function Hero2() {
  return <>

      <div className="bg-[url(/wave.svg)] pt-52 bg-no-repeat	">


        <div className=' flex-col justify-center items-center'>
            {/* this is the right box */}
            <div className='flex flex-col  justify-center items-center'>

            <h1 className='text-6xl font-semibold'>Web3 Gaming: Redefined</h1>
<p className='max-w-xl text-center pt-8 text-base font-light'>
Geoverse is a fully onchain, top-down RPG built on Solana. It offers an immersive gaming experience where players can explore a dynamic
 and procedurally generated universe. Geoverse incorporates multiple layers within its maps, including caves, landscapes, and buildings, 
 allowing for a rich and diverse gameplay environment.
</p>

            </div>
            {/* // this is the left box */}
            
            <div className='flex justify-center pt-16' >
    {data.map((elm)=>(
        <Boxes Header={elm.Header} discription={elm.discriptio}  image={elm.image} key={elm.id}  className='text-justify'/>
    ))}
</div>

        </div>

  </div>
  


  </>
}
