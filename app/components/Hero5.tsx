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
    <div className="bg-[url(/Section-4-Background.png)]   pt-[100px]  pr-[24px] pb-[100px] pl-[24px] gap-[32px]   bg-cover  flex justify-center items-center flex-wrap border-b border-slate-400">
    {
    data.map((elm,i=0)=>(
        <div className='flex flex-col  items-center py-[100px] px-[24px]'  key={i}>
            <div className='text-6xl font-semibold tracking-tighter '>             {elm.Number1}</div> 
            <div className='text-2xl pt-3 text-[#CBCBCB] font-medium tracking-tighter'>               {elm.String}</div> 
        </div>
    ))

    }
    

{/* </div> */}

        
    </div>
  )
}
