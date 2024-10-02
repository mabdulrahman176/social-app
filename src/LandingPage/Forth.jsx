import Swiper from '../LandingPage/Swipers/Swiper' 
import { IoLogoApple } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";


const Forth = () => {
  return (
    <section>
        {/* <Swiper/> */}
        <Swiper/>



        <div className="relative mt-9 ">
          <h1 className="text-[45px] leading-[50px] text-center font-sans  font-bold">More than a Social App</h1>
          <p className="text-center font-sans font-normal px-3  mt-3 text-[20px]">Beyond Profiles: Building the Future of Startups</p>
          <img src="Images/Lines1.png" className="absolute top-[30%] right-0  z-10 h-[80vh] w-[20%]" alt="" />
          <div className="lg:w-[80%] w-[90%] py-10 flex lg:flex-nowrap bg-gradient-to-b lg:bg-gradient-to-r from-[#e4efff] to-[#ffffff] flex-wrap mx-auto relative items-center rounded-2xl mt-10 AvailableSect">
            <img src="Images/Rect2.png" className="absolute left-0 h-[60vh] top-[20%]" alt="" />
            <div className="lg:w-[40%] w-[90%] mx-auto">
                <div className="lg:w-[70%] w-[90%] mx-auto  lg:ms-auto">
                <h1 className="text-[34px]  font-semibold leading-9 font-sans">Entrepreneur and Investor Bridge</h1>
                <p className="my-5 font-sans font-normal text-[20px] leading-7">Empower entrepreneurs and investors to connect, share insights, and showcase ventures through video creation on your app. </p>
                <p className="my-5 font-sans font-normal text-[20px] leading-7">Drive collaborative learning and expertise-sharing by enabling users to easily create podcasts within your app.</p>
                <div className="flex justify-between w-[80%] mt-10">
                  <p className='text-3xl '>Available on</p>
                  <p className='ml-3 text-3xl cursor-pointer'><IoLogoApple /></p>
                  <p className='ml-2 text-3xl cursor-pointer'><IoLogoGooglePlaystore/></p>
                </div>
                </div>
            </div>

            <div className="lg:w-[50%] w-[90%] mx-auto relative lg:mt-0 mt-[40px]">
              <img src="Images/MobileMock4.png" className=" 
              object-contain  w-full 
      h-auto 
      sm:h-[60vh] 
      md:h-[70vh] 
      lg:h-[700px] 
      lg:w-[600px] " alt="" />

            </div>
          </div>
        </div>


    
      
      </section>
  )
}

export default Forth
