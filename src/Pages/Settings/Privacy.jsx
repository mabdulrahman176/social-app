import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Privacy() {

  let navigate = useNavigate()
  return (
    <>
      <div className="bg-white h-full w-full">
        <h4 className="flex items-center gap-2 ms-4 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate("/settings")}
        />{" "}
        Privacy policy
      </h4>
      <div className="main w-[90%] h-[90%] mx-auto overflow-y-scroll Podcast_Top_Videos">
       <div className="h-full text-[14px] opacity-80">
       <p className="p-2">
          Your privacy is important to us. This Privacy Policy explains how Teq Tak ("we","us","or","our") collects uses and discloses and your
          informations when you use our mobile applications ("the,"app").
        </p>
        <p className="text-md font-semibold py-3">Information We Collect</p>
        <p>We collect the following informations when you use the App.</p>
        <div className="div p-3">
          <li>
             Account Information: When you create an account, we collect your
            name, emailaddress, password, and any other information your chose
            to provide.
          </li>
          <li>
            Profile Information: You can choose to add information to your
            profile, such as your work experiance, education, skill, and
            interests.{" "}
          </li>
          <li>
            Connection Information: You can chose to connect with other user
            on the app. We store information about your connections, such as
            their names and contact information.
          </li>
          <li>
            Usage Information: We collect information about how you use the
            app, such as the page you visit, the searches you condect, and the
            feature you use.
          </li>
          <li>
            Device Information: We collect information about the device you
            use to access the app, such as the device type, operating system,
            and IP Address.
          </li>
        </div>

        <p className="text-md font-semibold py-3">How We Use Your Information</p>
        <p>We use the information we collect to:</p>

        <div className="div p-3">
          <li> Provide and operate the App</li>
          <li> Create and manage your Account</li>
          <li>Send you important information about the app, such as update and
            security alerts.
          </li>
          <li>Connect you with other Users</li>
          <li>Personalize your experiance on the App</li>
          <li>Analyze how the app is Used</li>
        </div>

        <p className="text-md font-semibold py-3">Sharing Your Information</p>
        <p>
          We may Share your information with third party service providers who
          help us oprate the app. these service providers are contractually
          obligated to keep your information confidential and secure.
        </p>
       <br />
       </div>
      </div>
      </div>
    </>
  );
}

export default Privacy;
