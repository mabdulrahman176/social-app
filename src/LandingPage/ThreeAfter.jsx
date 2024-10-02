import React from 'react';

const ThreeAfter = () => {
  return (
    <div className='h-auto lg:h-screen'>
      <div className="flex lg:flex-nowrap flex-wrap  lg:w-[95%] w-[90%] mx-auto mt-40">
      <img src="Images/Lines1.png" className="absolute right-0  z-10 h-[70vh] w-[20%]" alt="djrio" />

        {/* Text Section */}
        <div className="w-full px-2 mx-auto lg:w-1/2 xl:w-1/2 md:w-2/3 sm:w-full">
          <h3 className="text-xl xl:text-3xl lg:text-3xl font-sans leading-[44px] font-medium md:text-2xl sm:text-xl text-[#193766] w-full xl:w-4/5 lg:w-4/5 md:w-3/4 sm:w-full">
            Entrepreneur-Investor Collaboration Through Location Integration
          </h3>
          <p className="my-2 font-sans text-sm font-normal leading-7 text-gray-500 xl:text-lg lg:text-sm md:text-xs sm:text-xs">
            Integration of location features into your app enriches user experience and fosters seamless connections, empowering entrepreneurs and investors alike. With this integration, users can easily locate each other on Google Maps, facilitating direct connections and fostering collaborations.
          </p>
          <div className="flex gap-3  my-[1.5rem] text-sm text-gray-800 xl:text-base lg:text-base md:text-sm sm:text-xs">
            <div className="h-4 w-8 bg-[#3B82F6] mt-1"></div>
            <p>
              <span className="text-[#3B82F6] font-sans font-bold text-[18px]">Entrepreneurs </span>
              can identify potential investors in their vicinity, streamlining the networking process.
            </p>
          </div>
          <div className="flex gap-3  my-[1.5rem] text-sm text-gray-800 xl:text-base lg:text-base md:text-sm sm:text-xs">
            <div className="h-4 w-8 bg-[#3B82F6] mt-1"></div>
            <p>
              <span className="text-[#3B82F6] font-sans font-bold text-[18px]">Investors </span>
              can pinpoint promising startups or businesses nearby, enhancing their investment scouting efforts.
            </p>
          </div>
          <div className="flex gap-3  my-[1.5rem] text-sm text-gray-800 xl:text-base lg:text-base md:text-xs sm:text-xs">
            <div className="h-4 w-8 bg-[#3B82F6] mt-1"></div>
            <p>
              <span className="text-[#3B82F6] font-sans font-bold text-[18px]">Viewers </span>
              browsing the platform can leverage location data to discover entrepreneurial ventures and investment opportunities in their local area.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-[60%] flex justify-center items-center overflow-x-hidden overflow-y-hidden w-[100%] mx-auto py-6 relative  z-10">
        <img 
  src="Images/Iphone15_v1.png" 
  className="
  object-cover
       h-[22rem]
            lg:h-[60vh]
  mx-auto
   
    transform 
    rotate-[30deg]  
  "  
  alt="Profile"
/>
        </div>
      </div>
    </div>
  );
};

export default ThreeAfter;
