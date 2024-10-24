import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import Layout from './Pages/Layout/Layout';
import ProfilePublic from './Pages/Profile/ProfilePublic';
// import Dashboard from './Pages/Dashboard/Dashboard';
import Feed from './Pages/Feed/Feed.jsx';
import SingleVideo from './Pages/SingleVideo/SingleVideo.jsx';
import './App.css';
import Map from './Pages/Map/Map.jsx';
import Podcast from './Pages/Podcast/Podcast.jsx';
import SinglePodcastDetails from './Pages/Podcast/SinglePodcastDetails.jsx';
import Jobs from './Pages/Jobs/Jobs.jsx';
import Event from './Pages/Events/Event.jsx';
import Eventdetail from './Pages/Events/Eventdetails.jsx';
import Ticket from './Pages/Events/Ticket.jsx';
import PodcastForm from './Pages/PodcastCreation/PodcastForm.jsx';
import EventForm from './Pages/EventsCreation/EventForm.jsx';
import TicketBuyerInfo from './Pages/Events/TicketBuyerInfo.jsx';
import TicketPayment from './Pages/Events/TicketPayment.jsx';
import Ticketdetails from './Pages/Events/Ticketdetail.jsx';
import JobCreationform from './Pages/JobCreation/JobCreationform.jsx';
import SingleCategory from './Pages/Jobs/SingleCategory.jsx';
import JobDetail from './Pages/Jobs/JobDetail.jsx';
import JobApply from './Pages/Jobs/JobApply.jsx';
import Notifications from './Pages/Notifications/Notifications.jsx';
import Messages from './Pages/Messages/Messages.jsx';
import User1 from './Pages/Messages/User1.jsx';
import Settings from './Pages/Settings/Settings.jsx';
import CreateVideo from './Pages/VideoCreation/CreateVideo.jsx';
import AppliedJobs from './Pages/Settings/AppliedJobsSetting.jsx';
import MyTickets from './Pages/Settings/MyTickets.jsx';
import WatchHistory from './Pages/Settings/WatchHistory.jsx';
import PaymentMethod from './Pages/Settings/PaymentMethod/PaymentMethod.jsx';
import PaymentForm from './Pages/Settings/PaymentMethod/PaymentForm.jsx';
import MyCards from './Pages/Settings/PaymentMethod/MyCards.jsx';
import Contactaccess from './Pages/Settings/ContactAccess.jsx';
import Changepassword from './Pages/Settings/ChangePassword.jsx';
import Blocklist from './Pages/Settings/Blocklist.jsx';
import Term from './Pages/Settings/Term.jsx';
import Privacy from './Pages/Settings/Privacy.jsx';
import Zoommeeting from './Pages/Messages/CreateMeeting.jsx';
import Subscribe from './Pages/Subscribe/Subscribe.jsx';
import Filters from './Pages/VideoFilter/Filters.jsx';
import FilterPodcast from './Pages/PodcastFilter/FilterPodcast.jsx';
import FilterEvent from './Pages/EventFilter/FilterEvent.jsx';
import FilterJob from './Pages/JobsFilter/FilterJob.jsx';
import Personaldetail from './Pages/Profile/Personaldetail.jsx';
import DevicePermissions from './Pages/Settings/DevicePermissions.jsx';
import Personaldetail2 from './Pages/Profile/Personaldetail2.jsx';
import Search from './Components/Navbar/Saerch.jsx';
import JobAppliedSuccess from './Pages/Jobs/JobAppliedSuccess.jsx';
import Header from './LandingPage/Header.jsx'
import NotFound from './Components/PageNotFound.jsx';
import PageNotFound from './Components/PageNotFound.jsx';
import WishList from './Pages/Settings/WishList.jsx';
import UserProfile from './Pages/Profile/UserProfile.jsx';
import ProfileVideos from './Pages/SingleVideo/ProfileVideos.jsx';
import Participants from './Pages/Events/Participants.jsx';
import MyCreatedJob from './Pages/Profile/MyCreatedJob.jsx';
import WatchSingle from './Pages/SingleVideo/WatchSingle.jsx';
import OnBoarding from './OnBoarding.js';


const App = () => {
 

  return (
    <Fragment>
      <Routes>
        {/* Login and Signup Routes */}
        <Route path="/" element={<Header/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bording" element={<OnBoarding/>} />
        <Route path="/signin" element={<Signin />} />
<Route path='/notfound' element={<NotFound />} />

        {/* Routes with Layout */}
        <Route element={<Layout />}>
      
        <Route path='/search'element={<Search/>} />
          <Route path="/videos" element={<Feed />} />
          <Route path="/video/:src" element={<SingleVideo />} />
          <Route path="/profilevideos/:src" element={<ProfileVideos />} />
          <Route path='/watchhistory/:src' element={<WatchSingle /> } />
          {/* <Route path="/ProfileVideo/:src" element={<ProfileVideo />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/profile" element={<ProfilePublic />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/personaldetails" element={<Personaldetail />} />
          <Route path="/personaldetail2" element={<Personaldetail2 />} />
          <Route path="/notifications" element={<Notifications />} />

          <Route path="/messages/" element={<Messages />}>
            <Route path="user1" element={<User1 />} />
            {/* <Route path="user2" element={<User2 />} /> */}
            <Route path="user3" element={<User1 />} />
            {/* <Route path="user4" element={<User2 />} /> */}
          </Route>
          <Route path="/createmeeting" element={<Zoommeeting />} />
          <Route path="/map" element={<Map />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/podcastdetails/" element={<SinglePodcastDetails />} />
          <Route path="/events" element={<Event />} />
          <Route path="/eventdetail" element={<Eventdetail />} />
          <Route path='/participants' element={<Participants />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/createpodcast" element={<PodcastForm />} />
          <Route path="/createevent" element={<EventForm />} />
          <Route path="/ticketbuyer" element={<TicketBuyerInfo />} />
          <Route path="/ticketpayment" element={<TicketPayment />} />
          <Route path="/ticketdetails" element={<Ticketdetails />} />
          <Route path="/createjob" element={<JobCreationform />} />
          <Route path="/singlecategory" element={<SingleCategory />} />
          <Route path="/jobdetail" element={<JobDetail />} />
          <Route  path='/mycreatedjob' element={<MyCreatedJob />}/>
          <Route path="/jobapply" element={<JobApply />} />
          <Route path='/jobapplysuccess' element={<JobAppliedSuccess />}/>
          <Route path="/createVideo" element={<CreateVideo />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/filterpodcast" element={<FilterPodcast />} />
          <Route path="/filterevent" element={<FilterEvent />} />
          <Route path="/filterjob" element={<FilterJob />} />
          <Route path="/jobs" element={<Jobs />} />
    {/* Redirect to 404 Page if no matching route is found */}
    <Route path="*" element={<PageNotFound />} />

          {/* SETTINGS ROUTES */}
          <Route path="/appliedjobs" element={<AppliedJobs />} />
          <Route path="/devicepermission" element={<DevicePermissions />} />
          <Route path="/mytickets" element={<MyTickets />} />
          <Route path="/watchhistory" element={<WatchHistory />} />
          <Route path="/paymentmethod" element={<PaymentMethod />} />
          <Route path="/paymentform" element={<PaymentForm />} />
          <Route path="/mycards" element={<MyCards />} />
          <Route path="/contactaccess" element={<Contactaccess />} />
          <Route path="/changepassword" element={<Changepassword />} />
          <Route path="/blocklist" element={<Blocklist />} />
          <Route path="/terms" element={<Term />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/wishlist" element={<WishList />}/>
        </Route>

   
      </Routes>


    </Fragment>
  );
};

export default App;