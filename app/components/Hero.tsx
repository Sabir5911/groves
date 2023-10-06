import React from "react";
import Header from "./Header";
import Button from "../shared/Button";
import Link from "next/link";
import Image from "next/image";
import pic from "./../../public/Pic.svg";
export default function Hero() {
  return (
    <>
      <div className="bg-[url(/hero.png)]  h-[850px]">
        <Header />

        <div className="             flex justify-evenly items-center pt-10 ">
          {/* for right sectio */}
          <div className="flex flex-col  justify-center ">
            <h1 className="text-6xl font-bold max-w-lg">
              The Gateway to Endless Realms
            </h1>

            <p className="text-lg text-left max-w-lg pt-7 font-normal">
              Geoverse is an ever expanding universe of interconnected
              adventures and experiences, crafted for limitless exploration.
            </p>
            <div className="flex   gap-x-9  items-center pt-5">
                <Button Text="Create Player" />
                <Link href={"/lear more"} className="text-base">Learn More</Link>
            </div>
            
          </div>
          <Image src={pic} alt="pic" width={500} height={500} />
        </div>
      </div>
    </>
  );
}
