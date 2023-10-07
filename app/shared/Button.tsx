


// const Button: FC<{ Text: string }> = ({ Text }) => {
//   return (
//     <button className='glow-button rounded-2xl'>
//       {Text}
//     </button>
//   );
// };

// export default Button;


import React, { FC } from 'react';

const Button: FC<{ Text: string, isGlowing?: boolean }> = ({ Text, isGlowing = false }) => {
  const buttonClasses = ``;

  return (
    <button className={`bg-[#188B22] text-white font-bold px-4 py-4 rounded-2xl text-base ${isGlowing ? 'shadow-custom' : ''}`}>
      {Text}
    </button>
  );
};

export default Button;