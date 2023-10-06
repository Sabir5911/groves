import React, { FC } from 'react'

const Button:FC <{Text:string}>= ({Text}) => {
  return (
    <button className='bg-[#188B22] text-white px-3 py-3 rounded-2xl hover:shadow-xl font-semibold  text-xl hover:scale-105 duration-300' >
{Text}
    </button>
  )
}
export default Button
