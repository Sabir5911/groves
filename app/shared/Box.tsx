import React, { FC } from "react";
import Image from "next/image";
interface props {
  image: string;
  Header: string;
  discription: string;
  className?: string;
}

const Boxes: FC<props> = ({ Header, discription, className, image }) => {
  return (
    <>
      <div className={`   flex  flex-col  max-w-md items-center justify-center `}>
        <div>
        <Image src={image} width={50} height={50} alt="box" />

        </div>
        <div className="font-bold text-xl max-w-6xl">{Header}</div>
        <p className=' text-center pt-2 text-base font-light'>{discription}</p>
      </div>
    </>
  );
};

export default Boxes;
