import React from 'react'
import Boxes from '../shared/Box'
import { data } from './data/data'
import { url } from 'inspector'
export default function Hero2() {
  return <>

      <div className="bg-[url(/wave.svg)]  font-urbitsan  bg-no-repeat flex-col justify-center items-center flex-wrap pt-[200px]  pr-[24px] pb-[120px] pl-[24px] gap-[64px]">

            <div className='flex flex-col  justify-center items-center '>

            <h1 className='text-6xl font-bold'>Web3 Gaming: Redefined</h1>
<p className='max-w-2xl text-center pt-8 text-base font-light text-[#CBCBCB]'>
Geoverse is a fully onchain, top-down RPG built on Solana. It offers an immersive gaming experience where players can explore a dynamic
 and procedurally generated universe. Geoverse incorporates multiple layers within its maps, including caves, landscapes, and buildings, 
 allowing for a rich and diverse gameplay environment.
</p>

            </div>
            
            <div className='flex justify-center  gap-x-7 flex-wrap pt-20' >
    {data.map((elm)=>(
        <Boxes Header={elm.Header} discription={elm.discriptio}  image={elm.image} key={elm.id}  className='text-justify'/>
    ))}
</div>

        </div>

  


  </>
}
