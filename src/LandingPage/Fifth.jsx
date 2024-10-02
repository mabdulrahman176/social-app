import React, { Fragment, useState } from "react";

import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { Link } from "react-router-dom";
import { LuDownload } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
const { Panel } = Collapse;
const text = `
It is alomost completely automated as a system . You can schedule plan and create
calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
a smooth business plan for your and your teamateswith one click!
`;

function Fifth() {
  const [data, setData] = useState("1st");

  const [activeKey, setActiveKey] = useState(["5"]);

  const onChange = (key) => {
    console.log(key);
    setActiveKey([]);
    setActiveKey(key);
  };

  const items = [
    {
      key: "1",
      label: "What is the purpose of this App?",
      children: <div style={{ color: "#786F77" }}>{text}</div>,
      // extra: genExtra(),
    },
    {
      key: "2",
      label: "How this app can help me get a Job?",
      children: <div style={{ color: "#786F77" }}>{text}</div>,
    },
    {
      key: "3",
      label: "Can I find Investors In this App?",
      children: <div style={{ color: "#786F77" }}>{text}</div>,
    },
    {
      key: "4",
      label: "Can I find Investors In this App?",
      children: <div style={{ color: "#786F77" }}>{text}</div>,
    },
    {
      key: "5",
      label: "Is this App free to use? ",
      children: <div style={{ color: "#786F77" }}>{text}</div>,
    },
    {
      key: "6",
      label: "What kind of Videos I can Post?",
      children: <div style={{ color: "#786F77" }}>{text}</div>,
    },
    {
      key: "7",
      label: "Can I share my videos on other platforms?",
      children: <div style={{ color: "#786F77" }}>{text}</div>,
    },
  ];
  const expandIcon = ({ isActive }) =>
    isActive ? (
      <UpOutlined className="bg-[#6165F3] p-3 text-white rounded-full flex justify-center items-center" />
    ) : (
      <DownOutlined className="bg-[#d9d9d9] p-3 text-white rounded-full flex justify-center items-center" />
    );

  return (
    <>
      <section>
        <div className="flex lg:flex-nowrap flex-wrap lg:w-[95%] w-[90%] mx-auto mt-[20px]">
          <div className="lg:w-[50%] w-[90%] mx-auto px-2">
            <h1 className="text-[44px]  leading-10 font-medium w-full font-sans text-[#193766] lg:w-[80%]">
              What we are offering is Outside the world.
            </h1>
            <p className="text-[20px] font-normal leading-7 font-sans text-[#697B98] my-5">
              Discover the transformative power of our app, where we're
              committed to turning your darkest future into a shining beacon of
              opportunity. When we say it, we mean it. Download our app now and
              unlock connections with potential entrepreneurs and investors
              eagerly awaiting your ideas.
            </p>

            <div className="pt-2">
              <p
                className={`py-4 cursor-pointer  ps-5 text-[20px] border-b-[1px] border-gray-100 font-medium ${
                  data === "1st" ? "Items_State text-[white] bg-[#193766] shadow-custom" : "text-[#193766]"
                }`}
                onClick={() => setData("1st")}
              >
                Entrepreneurs & Investors Videos
              </p>
              <p
                className={`py-4 cursor-pointer  ps-5 text-[20px] border-b-[1px] border-gray-100 font-medium ${
                  data === "2st" ? "Items_State text-[white] bg-[#193766] shadow-custom" : "text-[#193766]"
                }`}
                onClick={() => setData("2st")}
              >
                Business Podcasts{" "}
              </p>
              <p 
                className={`py-4 cursor-pointer  ps-5 text-[20px] border-b-[1px] border-gray-100 font-medium ${
                  data === "3st" ? "Items_State text-[white]  bg-[#193766] shadow-custom"  : "text-[#193766]"
                }`}
                onClick={() => setData("3st")}
              >
                Hosting Events
              </p>
              <p
                className={`py-4 cursor-pointer  ps-5 text-[20px] border-b-[1px] border-gray-100 font-medium ${
                  data === "4st" ? "Items_State text-[white] bg-[#193766] shadow-custom" : "text-[#193766]"
                }`}
                onClick={() => setData("4st")}
              >
                Dream Jobs
              </p>
            </div>
          </div>
          <div className="lg:w-[50%] w-[90%] mx-auto lg:ml-[10rem] lg:mt-0 mt-[40px]">
            <img
              src="Images/MobileMock5.png"
              className="   w-full 
              object-contain
      h-auto 
      sm:h-[60vh] 
      md:h-[70vh] 
      lg:h-[700px] 
      lg:w-[600px] "
              alt=""
            />
          </div>
        </div>

        <div className="mt-5">
          <h1 className="text-[44px] px-0 xl:px-[450px] lg:px-60 md:px-40 font-bold leading-[50px] mt-16 text-[#193766] text-center">
            What we are offering is Outside the world.
          </h1>
          <p className="lg:w-[45%] w-[80%] font-sans font-normal text-[20px] mt-5 text-[#697B98] mx-auto text-center pb-[20px]">
            Discover the transformative power of our app, where we're committed
            to turning your darkest future into a shining beacon of opportunity.
            When we say it, we mean it. Download our app now and unlock
            connections with potential entrepreneurs and investors eagerly
            awaiting your ideas.
          </p>
        </div>

        <div>
          <h1 className="text-[44px] mt-[50px] font-bold leading-[50px]   text-center">
            Frequently asked questions
          </h1>
          <p className="lg:w-[45%] w-[80%] font-sans font-normal text-[26px] mt-5 text-[#697B98] mx-auto text-center pb-[20px] ">
            We`re happy to answer your questions
          </p>
          <div className="lg:w-[80%] border-none w-[90%] mx-auto">
            <Collapse className="font-medium border-none"
              activeKey={activeKey}
              onChange={onChange}
              expandIcon={expandIcon}
              expandIconPosition="end"
            >
              {items.map((item) => (
                <Panel
                  header={item.label}
                  key={item.key}
                  extra={item.extra}
                  className="py-3 text-[18px] bg-white"
                >
                  {item.children}
                </Panel>
              ))}
            </Collapse>
          </div>
        </div>

        <div className="lg:w-[80%] w-[90%] py-20 mx-auto bg-[#0C0D38] flex flex-col items-center rounded-xl mt-10">
          <button className="py-3 px-5  rounded-full bg-[#3b83f64f] text-[#3B82F6] text-[16px] font-bold">
            DOWNLOAD
          </button>
          <h1 className="text-[36px] font-medium leading-[44px] my-[10px]  px-4 text-center py-3 text-white">
            Download the{" "}
            <Link to="/" className="text-[#6165F3] underline">
              Investor App
            </Link>{" "}
            Now
          </h1>
          <p className="text-[#AEC6EE] py-3 text-[16px] font-normal leading-8 lg:w-[40%] w-[80%] text-center">
            Download our app and join the community of millions of Entrepreneurs
            and Investors out there.
          </p>
          <button className="py-3 mt-4 text-white flex items-center gap-2 px-3 bg-[#6165F3] Items_State rounded-lg">
          <LuDownload/> Download Now
          </button>
        </div>

        {/* footer */}

        <div className=" bg-[#0C0D38] mt-[20px] gap-y-6 flex lg:flex-nowrap flex-wrap justify-evenly md:justify-center md:gap-10 pt-[140px]  lg:pt-[100px]" style={{clipPath: 'polygon(0 14%, 100% 0, 100% 100%, 0% 100%)'}}>
          <div className=" lg:w-[17%] w-[40%]  text-white ">
            <h1 className=" text-[30px] pe-6 font-bold leading-10 pt-4 pb-5">Investor App</h1>
            <p className="py-3 text-[15px] pe-6 font-normal leading-6 ">
            Revolutionizing Investor-Entrepreneur Social Media.
            </p>
            <button className=" bg-slate-50  rounded-full text-black w-[80%] mt-3 block py-1">
              Download
            </button>
          </div>
          <div className=" lg:w-[13%] w-[40%] text-white">
            <h1 className=" text-[25px] font-bold  pb-5">Company</h1>
            <div className="flex flex-col ">
              <Link className='text-[#FFFFFF] text-[13px]  py-4'>About us</Link>
              <Link className='text-[#FFFFFF] text-[13px]  py-4'>Home</Link>
              <Link className='text-[#FFFFFF] text-[13px]  py-4'>FAQ's</Link>
              <Link className='text-[#FFFFFF] text-[13px]  py-4'>Contact us</Link>
            </div>
          </div>
          <div className=" lg:w-[13%] w-[40%] text-white">
            <h1 className=" text-[25px] font-bold pb-5">Support Us</h1>
            <div className="flex flex-col ">
              <Link className='text-[#FFFFFF] text-[15px] py-4'>Help</Link>
              <Link className='text-[#FFFFFF] text-[15px] py-4'>FAQ's</Link>
            </div>
          </div>
          <div className=" lg:w-[13%] w-[40%] text-white">
            <h1 className=" text-[25px] font-bold pb-5">Resources</h1>
            <div className="flex flex-col ">
              <Link className='text-[#FFFFFF] text-[15px] py-4'>Privacy policy</Link>
              <Link className='text-[#FFFFFF] text-[15px] py-4'>Contact</Link>
              <Link className='text-[#FFFFFF] text-[15px] py-4'>Terms of service</Link>
            </div>
          </div>
          <div className=" lg:w-[18%] w-[90%] text-white lg:mb-0 mb-5">
            <h1 className=" text-[25px] font-bold pb-5">Address</h1>
            <div className="flex flex-col ">
              <Link className='text-[#FFFFFF] text-[15px]'>101 Marlow Street. #12-05 Clife Parkview. NYC 059020. <br /> <span className="text-yellow-300 ">View on Maps </span>  </Link>
              <Link className='text-[#FFFFFF] text-[17px] py-4'>Inquiries</Link>
              <Link className='text-[#FFFFFF] text-[15px]py-4'>+12 1214 1211 <br />
              hello@azitadarvishi.com</Link>
              <div className="flex items-center gap-3 mt-5 mb-3 text-xl">
                <FaTwitter className="cursor-pointer"/> <FaFacebook className="cursor-pointer"/> <FaLinkedin className="cursor-pointer"/> <FaYoutube className="cursor-pointer"/> <FaInstagram className="cursor-pointer"/>
              </div>
              <div>
                {/* icon here */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#232323d4]"></div>
        <div className="  bg-[#0C0D38] text-white text-center py-4">
            <div className="flex flex-wrap justify-center pt-8 lg:flex-nowrap gap-y-4">
            <p>© 2024 Investor. All rights reserved   <span className="px-4 ">|</span> Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice and Responsible Disclosure</p>
            </div>
        </div>


      
      </section>
    
    </>
  );
}

export default Fifth;
