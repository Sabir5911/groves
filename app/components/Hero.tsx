import React from "react";
import Header from "./Header";
import Button from '../shared/Button'
import Link from "next/link";
import Image from "next/image";
import pic from "./../../public/Pic.svg";
export default function Hero() {
  return (
    <>
      <div className="bg-[url(/hero.png)] w-auto h-auto lg:h-[860px] bg-no-repeat bg-cover  ">
        <Header />
        {/* className=" flex justify-evenly items-center pt-10  "  */}
        <div  className="pt-20 flex flex-col  lg:flex-row items-center justify-center  flex-wrap gap-x-24">
          {/* for right sectio */}
          <div className="flex flex-col  justify-center ml-20 ">
            <h1 className="text-6xl font-extrabold tracking-wider max-w-xl">
              The Gateway to Endless Realms
            </h1>

            <p className="text-[#CBCBCB] text-lg text-left max-w-sm pt-7 font-normal">
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
          <div className="float-left ">
          <Image src={pic} alt="pic" width={550} height={500} className="mt-24 lg:mt-0 " />

          </div>
        </div>
      </div>
    </>
  );
}