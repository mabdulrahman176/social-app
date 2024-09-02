import React, { useState, Fragment } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";

const mysubscribers = [
  {
    id: 1,
    imgSrc:
      "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=",
    message: "User_Name",
    linkText: "Name",
    
  },
  {
    id: 2,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "User_Name",
      linkText: "Name",
  },
  {
    id: 3,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "User_Name",
      linkText: "Name",
  },
  {
    id: 4,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "User_Name",
      linkText: "Name",
  },
  {
    id: 5,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "User_Name",
      linkText: "Name",
  },
  {
    id: 6,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "User_Name",
      linkText: "Name",
  },
  {
    id: 7,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "User_Name",
      linkText: "Name",
  },
  {
    id: 8,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "User_Name",
      linkText: "Name",
  },
  {
    id: 9,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "User_Name",
      linkText: "Name",
  },
  {
    id: 10,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "User_Name",
      linkText: "Name",
  },
  // Add more notification objects here
];

function MySubscribers(props) {
  const [able, setAble] = useState(null); // Change to hold the id of the notification to toggle

  return (
    <Fragment>
      <div className="h-full w-full bg-white md:h-screen lg:h-screen xl:h-screen">
        <div className="main h-full w-[90%] mx-4 md:w-[80%] lg:w-[60%] xl:w-[70%]">
          <p className="text-lg h-[10%] bg-white font-bold w-full z-10 flex items-center md:text-xl lg:text-xl xl:text-2xl">
            {props.name}
          </p>
          <div className="flex flex-col justify-between  md:flex-row lg:flex-row xl:flex-row  text-lg md:text-xl lg:text-lg xl:text-xl font-bold">
            <h1>{props.sub}</h1>
            <h2>{props.total}</h2>
          </div>
          <div className="overflow-y-auto h-[550px]" style={{
                'WebkitOverflowScrolling': 'touch',
                'WebkitScrollbar': {
                    display: 'none'
                },
                '-msOverflowStyle': 'none',
                'scrollbarWidth': 'none'
            }}>
            {mysubscribers.map((notification) => (
              <div
                key={notification.id}
                className="flex items-center justify-between py-3 mt-2 border-b"
              >
                <div className="flex items-center gap-3">
                  <Link to='/profile'>
                    <img
                      src={notification.imgSrc}
                      alt=""
                      className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] rounded-full"
                    />
                  </Link>
                  <div>
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl opacity-75">
                      {notification.message}
                    </p>
                    <p>
                      <Link to="##" className="text-xs md:text-sm lg:text-base xl:text-lg opacity-75">
                        {notification.linkText}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <CiMenuKebab
                    className="text-base md:text-lg lg:text-xl xl:text-2xl cursor-pointer"
                    onClick={() =>
                      setAble(able === notification.id ? null : notification.id)
                    }
                  />
                  {able === notification.id && (
                    <div
                      className="absolute right-0 w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] cursor-pointer px-3 py-2 z-30 bg-white shadow-lg border"
                      onClick={() => setAble(able === notification.id ? null : notification.id)}
                    >
                      <p className="text-sm md:text-base lg:text-lg xl:text-xl opacity-75 mb-5">Details</p>
                      <p className="text-sm md:text-base lg:text-lg xl:text-xl opacity-75 mb-5">Hide</p>
                      <p className="text-sm md:text-base lg:text-lg xl:text-xl opacity-75 mb-5">Block and report</p>
                      <p className="text-sm md:text-base lg:text-lg xl:text-xl text-red-500">Delete</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MySubscribers;
