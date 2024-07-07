import React from 'react'

function Ticketdetail() {
  return (
    <>
    
    <div className="main h-auto w-[90%] m-[auto]">
        <h3 className='text-3xl font-bold'>Ticket Details</h3>
        <div className="bg h-[60vh] w-[100%] bg-[#f3f2f2] rounded-xl mt-5">
            <div className="flex justify-evenly">
                <div className="div">
<img src="./Rectangle 11.png" alt="" className='h-[40vh] mt-8'/>
<p className='text-lg font-semibold text-center p-2'>Risk-tolerant for higher returns</p>
</div>

<div className="location h-[50vh] w-[50%] mt-8">
<p className='text-base font-semibold text-[gray]'>Location</p>
<p className='text-lg font-semibold'>St.James Park Square, London</p>
<div className="flex justify-between mt-5">
<div className="name h-[10vh] w-[20%]">
<p className='text-base font-semibold text-[gray]'>Name</p>
<p className='text-lg font-medium'>Kim Seon ho</p>
</div>

<div className="date h-[10vh] w-[20%]">
<p className='text-base font-semibold text-[gray]'>Date</p>
<p className='text-lg font-medium'>28 Apr 2024</p>
</div>
</div>

<div className="flex justify-between mt-5">
<div className="name h-[10vh] w-[20%]">
<p className='text-base font-semibold text-[gray]'>Start Time</p>
<p className='text-lg font-medium'>18:00 pm</p>
</div>

<div className="date h-[10vh] w-[20%]">
<p className='text-base font-semibold text-[gray]'>End Time</p>
<p className='text-lg font-medium'>22:00 pm</p>
</div>
</div>


<div className="h-[2px] w-[100%] border-[1px] border-dashed mt-1"></div>

<img src="./Group 1.png" alt="" className='h-[13vh] w-[50%] m-auto mt-3'/>

</div>
</div>
        </div>
        <br /><br /><br />
    </div>
    
    </>
  )
}

export default Ticketdetail