import React from "react";
import Header from "./Header";
import Button from '../shared/Button'
import Link from "next/link";
import Image from "next/image";
import pic from "./../../public/Pic.svg";
export default function Hero() {
  return (
    <>
    
      <div className="bg-[url(/hero.png)]   bg-no-repeat bg-cover   ">
      <Header />

        <div  className="pt-16 flex items-center justify-center  flex-wrap  bg-[rgba(0,7,0,0)] bg-cover bg-center bg-no-repeat h-[50%]">
          {/* for right sectio */}
          <div className="flex flex-col  justify-center ml-20 ">
            <h1 className="text-6xl font-extrabold  max-w-xl">
              The Gateway to Endless Realms
            </h1>

            <p className="text-[#CBCBCB] text-base  text-left max-w-sm pt-7 font-normal">
              Geoverse is an ever expanding universe of interconnected
              adventures and experiences, crafted for limitless exploration.
            </p>
            <div className="flex   gap-x-4  items-center pt-10">
              <div >
              <Button Text="Create Player" isGlowing={true}/>
      
              </div>
                <Link href={"/lear more"} className="text-lg font-semibold">Learn More</Link>
            </div>
            
          </div>
          <div className="float-left flex flex-shrink-0 ">
          <Image src={pic} alt="pic" width={550} height={500} className="mt-24 lg:mt-0 " />


          </div>
        </div>



        {/* <div className="w-[1440px] h-[708.65px] px-6 pt-[140px] pb-16 bg-black bg-opacity-50 justify-center items-start gap-20 inline-flex">
  <div className="h-[504.65px] justify-start items-center gap-20 flex">
    <div className="grow shrink basis-0 flex-col justify-start items-start gap-[38px] inline-flex">
      <div className="self-stretch text-white text-[70px] font-extrabold font-['Urbanist'] leading-[71.40px]">The Gateway to Endless Realms</div>
      <div className="w-[386px] text-stone-300 text-lg font-normal font-['Urbanist'] leading-snug">Geoverse is an ever expanding universe of interconnected adventures and experiences, crafted for limitless exploration.</div>
      <div className="justify-center items-center gap-6 inline-flex">
        <div className="w-[196px] px-[30px] py-[23px] bg-green-700 rounded-[20px] shadow justify-center items-center gap-2.5 flex">
          <div className="text-center text-white text-[22px] font-bold font-['Urbanist'] leading-snug">Create Player</div>
        </div>
        <div className="text-center text-white text-[22px] font-bold font-['Urbanist'] leading-snug">Learn More</div>
      </div>
    </div>
    <div className="h-[504.65px] flex-col justify-between items-center inline-flex">
      <div className="w-[525px] h-[504.65px] relative">
        <img className="w-[393.95px] h-[393.95px] left-0 top-0 absolute rounded-[40px]" src={pic} />
        <img className="w-[294.65px] h-[294.65px] left-[230.35px] top-[210px] absolute rounded-[40px] shadow" src="https://via.placeholder.com/295x295" />
        <img className="w-[157.09px] h-[157.09px] left-[124.53px] top-[304.42px] absolute rounded-[40px] shadow" src="https://via.placeholder.com/157x157" />
      </div>
    </div>
  </div>
</div> */}



      </div>
    </>
  );
}