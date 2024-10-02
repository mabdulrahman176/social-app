import { MdOutlineArrowOutward } from "react-icons/md";

const Second = () => {
  const goThroughData = [
    {
      id: 1,
      title1: "Share Your Vision.",
      title2: "Inspire Others.",
      description:
        "Showcase your expertise, tell your startup story, or offer valuable insights. Engaging video content helps you connect and build a following.",
    },
    {
      id: 2,
      title1: "Become a Thought Leader.",
      title2: "Share Your Knowledge.",
      description:
        "Lead insightful discussions, interview industry experts, and establish yourself as a trusted voice. Informative podcasts attract investors and potential partners.",
    },
    {
      id: 3,
      title1: "Connect Face-to-Face.",
      title2: "Build Meaningful Relationships.",
      description:
        "Host or attend exclusive events to network, pitch ideas, and foster valuable connections. Live events create a dynamic way to grow your startup network.",
    },
  ];
  return (
    <div className='bg-gradient-to-b from-[#e4efff] to-[#ffffff] pb-6'>
      <div className="relative sm:pt-20 ">
        <img
          src="Images/RectangleLeft.png"
          className="absolute left-0 w-1/5 h-3/5 top-12"
          alt="img"
        />
        <p className="lg:w-1/3 md:w-1/2 w-full  mx-auto text-[32px] font-sans font-medium lg:text-3xl text-center text-[#193766]">
          Let Our Powerful Features Do the Talking: See How They Solve Your
          Problems
        </p>
        <img
          src="Images/MobileMock1_v1.png"
          className="w-full
            h-[22rem]
            lg:h-[70vh]
            mx-auto my-5
            object-contain
            // max-w-[950px]
            // sm:w-[640px] 
            // sm:h-auto
            // md:w-[768px] 
            // md:h-auto
            // lg:w-[1050px]"
          alt="Responsive Image"
        />
      </div>
      <div className="flex flex-wrap justify-center w-11/12 h-auto gap-5 py-8 mx-auto mt-3 mb-8 md:flex-wrap lg:justify-arround lg:gap-0 lg:w-4/5 lg:py-0 lg:px-0 DivScrollRemove">
        {goThroughData.map((elm, ind) => (
          <div
            key={ind}
            className={` lg:w-1/3 md:w-2/5  sm:w-4/5 w-72 h-72  flex-shrink-0  relative flex  flex-col items-center  rounded-xl p-5   pt-12 py-6 ${ind === 1 ? "bg-[#6165F3] text-white" : "bg-[#F7F7F7]"
              }`}
          >
            <div
              className={`icon   h-20 translate-y-[-50%] w-20 rounded-full ${ind === 1 ? "bg-[#6165F3]" : "bg-[#F7F7F7]"
                } border-4 border-white mx-auto flex items-center   justify-center absolute top-0`}
            >
              <MdOutlineArrowOutward className='text-2xl' />
            </div>

            <h3 className="w-full text-md font-sans leading-8 text-[20px] font-bold">{elm.title1}</h3>
            <h3 className="w-full text-md font-sans leading-8 text-[20px] font-bold pb-3">
              {elm.title2}
            </h3>
            <p className="w-full text-[16px] opacity-70">{elm.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Second
