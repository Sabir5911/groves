import React from "react";
import Header from "./Header";
import Button from '../shared/Button'
import Link from "next/link";
import Image from "next/image";
import pic from "./../../public/Pic.svg";
export default function Hero() {
  return (
    <>
    <div className="bg-[url(/hero.png)] bg-[rgba(0,7,0,0)] bg-cover bg-center bg-no-repeat h-[708px] ">
    <Header />

      <div className="  bg-no-repeat bg-cover pt-[140px]  pr-[24px] pb-[64px] pl-[24px] gap-[80px]  bg-gradient-to-b from-transparent via-#000700 to-#000700  from-rgba(0, 7, 0, 0.5) to-rgba(0, 7, 0, 0.5) bg-gradient-to-r from-#FFFFFF to-#FFFFFF  ">

        <div  className=" flex items-center justify-around  flex-wrap  gap">
          {/* for right sectio */}
          <div className="flex flex-col  justify-center w-[515px] h-[142px]">
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
          <div className="w-[525px] h-[504px]" >
          <Image src={pic} alt="pic" width={550} height={500} />


          </div>
        </div>



      </div>
      </div>

    </>
  );
}