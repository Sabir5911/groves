

import React, { FC } from 'react';

const Button: FC<{ Text: string, isGlowing?: boolean }> = ({ Text, isGlowing = false }) => {

  return (
    <button className={`bg-[#188B22] text-white font-bold px-6 py-4 rounded-2xl text-base ${isGlowing ? 'shadow-custom' : ''}`}>
      {Text}
    </button>
  );
};

export default Button;