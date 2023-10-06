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
<div className=' flex justify-center items-center gap-x-12'>
    {
    data.map((elm,i=0)=>(
        <div className='flex flex-col justify-center items-center ' key={i}>
            <div className='text-6xl'>             {elm.Number1}</div> 
            <div className='text-2xl pt-3'>               {elm.String}</div> 
        </div>
    ))

    }
    

</div>

        
    </div>
  )
}
