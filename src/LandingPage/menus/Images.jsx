
import RatingBar from './RatingBar';

const Images = () => {
  return (
    <div className="items-center justify-center hidden md:flex">
      <div className="Rectangle-Img mt-12 md:mt-10 sm:h-[500px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[800px] lg:w-[600px] xl:w-[600px] w-full md:relative md:left-[120px] lg:absolute lg:top-[-30px] lg:left-[420px] xl:absolute xl:top-[-30px] xl:left-[740px] flex justify-center items-center">
        {/* Background Image */}
        <img
          src="Images/Rectangle 3.png"
          alt="Background Image"
          className="absolute w-full h-full"
        />

        {/* Rating Bar */}
        <div className="z-10 relative top-[100px] sm:top-[120px] md:top-[120px] lg:top-[170px] xl:top-[200px] left-4 sm:right-6 md:right-16">
          <RatingBar />
        </div>

        {/* Foreground Images */}
        <div className="absolute flex justify-center">
          <img
            src="Images/HeaderMobile.png"
            alt="Header Mobile"
            className="w-full h-auto sm:w-full md:w-[60%] lg:w-[70%] xl:w-[90%] mx-auto"
          />
          <img
            src="Images/connecting.png"
            className="absolute top-0 right-0 w-24 h-24 sm:h-16 lg:h-32 md:top-12 md:right-28 lg:left-80 sm:top-28 lg:top-16 sm:w-16 lg:w-32 xl:left-96"
            alt="Connecting"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
