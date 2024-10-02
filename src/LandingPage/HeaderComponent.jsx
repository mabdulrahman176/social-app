
import { LuDownload, LuPlayCircle } from 'react-icons/lu';
import Images from './menus/Images';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div className="bg-[#e4efff] pb-20 flex w-[100vw] justify-between flex-col  lg:flex-row ">
      {/* Content Section */}
      <div className="pt-10 mx-4 md:ml-16 md:w-full md:pt-16 lg:w-1/2 ">
        <p className="text-[#1a3766]">
          <span className="text-[36px] sm:text-[40px] md:text-[50px] leading-tight">
            Revolutionizing social <br /> media for
          </span>{" "}
          <br />{" "}
          <span className="font-bold leading-tight md:leading-[74px] text-4xl sm:text-5xl md:text-5xl underline">
            Entrepreneurs and <br /> Investors
          </span>
        </p>
        <p className="text-[#697B98] text-[18px] sm:text-[20px] md:text-[22px] xl:pr-52 pr-0 lg:pr-8 leading-[28px] sm:leading-[32px] md:leading-[36px] mt-4 md:mt-5 md:w-3/4 lg:w-full">
          Turn your vision into reality. Join the exclusive network connecting
          ambitious entrepreneurs with investors.
        </p>
        <div className="flex flex-col mt-8 space-y-4 sm:flex-row md:mt-16 sm:space-y-0 sm:space-x-4">
          <button
            className="py-3 sm:py-4 px-5 rounded flex items-center gap-2 text-white bg-[#6165F3] shadow-lg"
            style={{ boxShadow: "0px 15px 15px #6166f350" }}
          >
            <LuDownload className='text-2xl'/> Download Now
          </button>
          <Link to={'/signup'}>
          <button 
           className="py-3 sm:py-4 px-5 flex items-center gap-2 rounded bg-[#C6DBFF] text-[#6165F3]">
            <LuPlayCircle className='text-2xl' /> See in Action
          </button>
          </Link>
        </div>
      </div>

<div className='relative -z-0'>
  <img src="Images/HeroFigma.png" className='h-[50rem] max-lg:hidden -z-20 relative top-[-10rem] right-[-1.5rem]' alt="" />
</div>
      {/* Image Section ### it is in beta use the above implmentation*/}
      {/* <div className="flex justify-center w-full mt-8 md:mt-0 lg:w-1/2 md:justify-center lg:justify-end">
        <Images />
      </div>  */}
    </div>
  );
};

export default HeaderComponent;
