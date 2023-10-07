import React from 'react'

export default function Hero5() {
    let data=[
        {
            Number1:"11",
            String:"Players Created"

    },
    {
        Number1:"20.8K",
        String:"Tiles Discovered"

},
{
    Number1:"5.6K",
    String:"Tiles Discovered"

}
]
  return (
    <div className="bg-[url(/Section-4-Background.png)]  pt-32  pb-16">
<div className=' flex justify-evenly items-center flex-wrap'>
    {
    data.map((elm,i=0)=>(
        <div className='flex flex-col  items-center  ' key={i}>
            <div className='text-6xl font-semibold'>             {elm.Number1}</div> 
            <div className='text-2xl pt-3 text-[#CBCBCB]'>               {elm.String}</div> 
        </div>
    ))

    }
    

</div>

        
    </div>
  )
}
