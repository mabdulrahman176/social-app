// Layout.js
import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import LeftLayout from "../../Components/LeftLayout/LeftLayout";
import RightLayout from "../../Components/RightLayout/RightLayout";
import PodcastItems from "../PodcastCreation/Podcastitems";
import { myContext } from "../../Context/CreateContext";
import Success from "../PodcastCreation/Success";
import EventSuccess from "../EventsCreation/EventSuccess";
import JobSuccess from "../JobCreation/JobSuccess";
import Search from "../../Components/Navbar/Saerch";

const Layout = () => {
  let { CreationStates, PodcastStates, EventStates, JobStates } = useContext(myContext);


  const [rightSidebar, setRightSidebar] = useState(false);

  return (
    <div className="flex flex-col h-[100vh] w-[100vw]   bg-gray-200">
      {/* Header */}
      <header className="bg-white h-[7%] w-full ">
        <Navbar state={{setRightSidebar,rightSidebar}}/>
        {/* <Search/> */}
      </header>

      <div className="flex justify-between h-[82%] lg:h-[93%] mt-1  w-full overflow-x-hidden relative">
        {/* Left Sidebar */}
        <aside className="lg:w-[13%] w-full lg:static fixed left-0 bottom-0 bg-white lg:h-full h-[10%] z-50">
          <LeftLayout />
        </aside>
        {/* Main Content */}
        <main className="lg:w-[73.4%] w-full h-full bg-gray-200  relative ">
          {CreationStates.creationPodcast && (
            <div className="w-full h-full flex justify-center items-center z-20 absolute left-0 top-0">
              <PodcastItems />
            </div>
          )}

          {PodcastStates.podcastSubmitted && (
            <div className="absolute z-20  w-full h-full top-0 left-0 ">
              <Success />
            </div>
          )}

          {EventStates.eventSubmitted && (
            <div className="absolute z-20 w-full h-full top-0 left-0 ">
              <EventSuccess />
            </div>
          )}


          {JobStates.jobSubmitted && (
            <div className="absolute z-20 px-1 w-full h-full top-0 left-0 ">
              <JobSuccess />
            </div>
          )}

          <Outlet />
        </main>

        {/* Right Sidebar */}
        <aside className={`lg:w-[13%] sm:w-[20%] w-[30%] lg:block ${rightSidebar === true ? 'left-0' : 'left-[-40%]'} bg-red-900  h-full lg:static absolute top-0 z-50`} style={{transition:'.5s'}}>
            <RightLayout state={{setRightSidebar}}/>
        </aside>
      </div>
    </div>
  );
};

export default Layout;
