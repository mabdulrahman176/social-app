// import React, { useState } from 'react'
// import { MdOutlineCancel } from "react-icons/md";
// import { IoIosArrowDown } from "react-icons/io";
import img1 from './../Imges/img1.png'
// import { useNavigate } from 'react-router-dom';
// import { TfiWorld } from "react-icons/tfi";
// import { GoPeople } from "react-icons/go";
// import { MdOutlineRestoreFromTrash } from "react-icons/md"
import { AiOutlineEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
const Edit = () => {
   // const navigate = useNavigate()
   // const [post, setPost] = useState(false)
   // const PostHandler = () => {
   //    setPost(true)
   // }
   // const PostClose = ()=>{
   //    setPost(false)
   //  }
   return (
      <>
         <div className='w-[35%] mx-auto mt-6 bg-[]'>
            {/* header */}
            {/* <div className='w-full flex justify-between'>
               <div className=" flex w-[29%]  justify-between">
                  <RxCross1 size={30} className='pt-2' onClick={PostClose}/>
                  <h3 className='font-medium text-xl '>Anyone</h3>
                  <IoIosArrowDown size={30} className='pt-2' onClick={PostHandler} />
               </div>
               <button className='bg-[#6165f3] w-24 h-12 rounded-3xl text-white font-normal' onClick={() => navigate("post")}>Post</button>
            </div> */}
            {/* img-section */}
            <div className='w-full flex flex-col items-center justify-center relative'>

               <h3 className='font-thin w-full'>Add Description...</h3>
               {/* {
                  post && (
                     <div className='w-[80%] h-80 absolute top-44  bg-white  mx-auto  rounded-tr-2xl  rounded-tl-2xl'>
                        <div class="w-full relative top-4 flex flex-col items-center justify-center text-center">
                           <h1 class="bg-black w-20 h-1 top-2 rounded-xl"></h1>
                           <h1 class="font-medium pt-2 text-2xl">Who can see this post?</h1>
                        </div>

                        <hr className='mt-7' />
                        <div className='relative top-4 flex w-[60%] h-[15%] items-center justify-center  space-x-5'>
                           <TfiWorld size={30} className='text-[#404040]' />
                           <h2 className='text-xl '>Anyone</h2>
                        </div>
                        <hr className='mt-7' />
                        <div className='relative top-4 flex w-[80%] h-[15%] items-center justify-center  space-x-5'>
                           <GoPeople size={30} className='text-[#404040]' />
                           <h2 className='text-xl '>Only Subscribers</h2>
                        </div>
                        <hr className='mt-7' />
                        <div className='relative top-4 flex w-[60%] h-[15%] items-center justify-center  space-x-5'>
                           <MdOutlineRestoreFromTrash size={30} className='text-[#404040]' />
                           <h2 className='text-xl '>Archeive</h2>
                        </div>
                     </div>
                  )
               } */}
               {/* img-section  */}
               <div className=' w-full'>
                  <img className='w-full h-[530px]' src={img1} alt="" />
                  <div className='absolute top-9 right-0 mr-7  flex items-center justify-center '>
                  <button className='  mr-7  flex items-center justify-center bg-[#c5c5c5] w-28 h-12 rounded-3xl text-white font-normal'>
               <AiOutlineEdit size={25} className='text-black' />
               <span className=' mr-2 text-2xl text-black font-medium'>Edit</span>
            </button>
              <div className='bg-[#c5c5c5] w-10 h-10 rounded-3xl flex items-center justify-center'>
              <RxCross1 size={20}/>
              </div>
                  </div>
               </div>
               {/* model section  */}
            </div>
         </div>
      </>
   )
}

export default Edit
