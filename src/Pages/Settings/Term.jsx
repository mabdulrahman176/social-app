import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Term() {
  
  let navigate = useNavigate()

  return (
    <>
      <div className="bg-white h-full w-full">
      <h4 className="flex items-center gap-2 ms-4 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate("/settings")}
        />{" "}
        Term of use
      </h4>
      <div className="main w-[90%] h-[90%] mx-auto overflow-y-scroll Podcast_Top_Videos">
        <div className="h-full text-[14px] opacity-80">
        <p>
          These Terms of Use ("Terms") govern your access to and use of the Teq Tak Mobile Application (the "App"). By accessing and using the app,
          you agree to be bound by these terms.
        </p>

        <p className="text-md font-semibold py-3">Who Can Use the App</p>
        <p>
          You must be at least 13 years old to use the app. if your are under
          18, you must i have your parents or legal guardians perimission to use
          the app.
        </p>

        <p className="text-md font-semibold py-3">Acceptable Use</p>
        <div>
          <p>
            You agree to use the app only for lawful purposes and in accordance
            with these Terms. You agree not to:
          </p>
          <li> Use the app to harass, abuse, or threaten others.</li>
          <li> Impersonate any person entity.</li>
          <li>
             Post or transmit any content that is unlawful, harmful,
            threatening, abusive, harassing, defamatory , vulgar, obscane,
            hateful, or racially or ethnically offensive.
          </li>
          <li>
            Interfere with or disrupt the app or the servers or networks that
            support the app.
          </li>
          <li> Use the app to violate any applicable law or regulation.</li>
        </div>

        <p className="text-md font-semibold py-3">Content Ownership</p>
        <p>
          You retain all ownership rights to the content you post on the app.
          However, by posting content on the app, you grant us a non-exclusive,
          royalty-free, worldwide license to use, display, reproduce, modify,
          and translate you content on the app.
        </p>

        <p className="text-md font-semibold py-3">Termination</p>
        <p >
          We may terminate your access to the app for any reason, at any time,
          without notice. We may also remove any content you post on the app for
          any re
        </p>

        <p className="text-md font-semibold py-3">Diclaimer of Warranties</p>
        <p >
The App is Provided "AS IS" And Without Warranties Of Any Kinf, Whatover Express Or Implied We Disclaim All Warranties

        </p>
        <br />
        </div>
      </div>
      </div>
    </>
  );
}

export default Term;
