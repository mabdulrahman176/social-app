import React, { useState, Fragment } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";

const notifications = [
  {
    id: 1,
    imgSrc:
      "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=",
    message: "Successfully bought tickets for the event.",
    linkText: "View here",
    time: "16m",
  },
  {
    id: 2,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "Successfully bought tickets for the event.",
    linkText: "View here",
    time: "21m",
  },
  {
    id: 3,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "Successfully bought tickets for the event.",
    linkText: "View here",
    time: "21m",
  },
  {
    id: 4,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "Successfully bought tickets for the event.",
    linkText: "View here",
    time: "21m",
  },
  {
    id: 5,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "Successfully bought tickets for the event.",
    linkText: "View here",
    time: "21m",
  },
  {
    id: 6,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "Successfully bought tickets for the event.",
    linkText: "View here",
    time: "21m",
  },
  {
    id: 7,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "Successfully bought tickets for the event.",
    linkText: "View here",
    time: "21m",
  },
  {
    id: 8,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "Successfully bought tickets for the event.",
    linkText: "View here",
    time: "21m",
  },
  {
    id: 9,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "Successfully bought tickets for the event.",
    linkText: "View here",
    time: "21m",
  },
  {
    id: 10,
    imgSrc:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      message: "Successfully bought tickets for the event.",
    linkText: "View here",
    time: "21m",
  },
  // Add more notification objects here
];

function Notification() {
  const [able, setAble] = useState(null); // Change to hold the id of the notification to toggle

  return (
    <Fragment>
      <div className="h-full w-full bg-white ">
        <div className="main h-full w-[90%] m-[auto]">
          <p className="text-lg h-[10%] flex items-center">Notification</p>
          <div className="h-[90%] overflow-y-scroll Podcast_Top_Videos">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex justify-between py-3 mt-2 border-b"
            >
              <div className="flex gap-2">
              <Link to='/profile'>
              <img
                  src={notification.imgSrc}
                  alt=""
                  className="h-[50px] w-[50px] rounded-full"
                />
              </Link>
                <div>
                  <p className="text-[15px] opacity-75">{notification.message}</p>
                  <p>
                    <Link to="##" className="text-[blue] underline text-[13px] opacity-75">
                      {notification.linkText}
                    </Link>
                  </p>
                </div>
              </div>
              <div className="relative">
                <p className="text-[gray] text-[13px] opacity-75">{notification.time}</p>
                <CiMenuKebab
                  className="mt-2 ms-2 text-lg"
                  onClick={() =>
                    setAble(able === notification.id ? null : notification.id)
                  }
                />
                {able === notification.id && (
                  <div className="absolute w-[200px] cursor-pointer right-0 px-3 py-2 z-30 bg-white shadow-lg border" onClick={()=>setAble(able === notification.id ? null : notification.id)}>
                    <p className="text-[15px] opacity-75  mb-5">Details</p>
                    <p className="text-[15px] opacity-75  mb-5">Hide</p>
                    <p className="text-[15px] opacity-75  mb-5">
                      Block and report
                    </p>
                    <p className="text-[15px] opacity-75  text-[red]">Delete</p>
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

export default Notification;
