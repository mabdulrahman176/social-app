import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [signUp, setSignUp] = useState(true);

  useEffect(() => {
    if (location.pathname === "/signin") {
      setSignUp(false);
    } else {
      setSignUp(true);
    }
  }, [location]);

  return (
    <div className="w-[100vw] h-[100vh] grid place-items-center bg-blue-400">
      <div className=" w-full h-full md:h-[95vh] md:w-[27vw] bg-white flex flex-col justify-between items-center md:items-start px-10 py-4">
        <section className="flex flex-col gap-2 items-start py-[1px]">
          <div className="flex justify-center items-center border-[1px] border-gray-300 rounded w-full">
            <button
              onClick={() => navigate("/signup")}
              className={`${
                signUp === true ? "linear_gradient" : "text-black "
              }  w-full py-[10px] text-xs font-semibold  rounded`}
            >
              Sign up
            </button>
            <button
              onClick={() => navigate("/signin")}
              className={`${
                signUp === false ? "linear_gradient" : ""
              } text-black w-full py-[10px] text-xs font-semibold  rounded`}
            >
              Sign in
            </button>
          </div>

          <h1 className="text font-bold text-start">{`${
            signUp === true ? `Let's get started !` : `Welcome back!`
          }`}</h1>

          <form className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Email"
              name="email"
              id=""
              className="py-1 px-2 rounded outline-none border-[1px] border-gray-200 placeholder:text-xs "
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id=""
              className="py-1 px-2 rounded outline-none border-[1px] border-gray-200 placeholder:text-xs "
            />

            {!signUp && <u className="text-sm text-end text-blue-400">Forget password?</u>}
            {signUp && <h2 className="text-xs font-semibold">Select your Role</h2>}
            <section className={`flex justify-center gap-4 max-w-full ${signUp===false?"h-0 opacity-0":""}`}>
              <button className="linear_gradient rounded text-xs text-white px-2 py-2 font-semibold">
                Enterpreneur
              </button>
              <button className="bg-[#f1f1f1] rounded text-xs text-black px-2 py-2 font-semibold">
                Investor
              </button>
              <button className="bg-[#f1f1f1] rounded text-xs text-black px-2 py-2 font-semibold">
                Viewer
              </button>
            </section>

            <section className="flex items-center gap-2 justify-center">
              <input type="checkbox" id="check" />
              <label htmlFor="check" className="text-sm py-2">
                Remember me
              </label>
            </section>
            <button className="w-full mb-4 py-2 rounded-3xl text-xs linear_gradient text-white">
              {`${signUp===true?"Sign up":"Sign in"}`}
            </button>
          </form>
        </section>

        <div className="h-[1px] md:my-2 relative bg-black w-full">
          <p className="absolute -top-[12px] md:left-[77px] left-[99px] px-1 text-black text-sm bg-white">
            or continue with
          </p>
        </div>

        <section className="flex items-center justify-between w-full md:my-2">
          <div className="flex justify-center items-center bg-[#f1f1f1] px-2 py-2 rounded-full">
            <img className="w-5 h-5" src="/insta.png" alt="" />
          </div>
          <div className="flex justify-center items-center bg-[#f1f1f1] px-2 py-2 rounded-full">
            <img className="w-5 h-5" src="/youtube.png" alt="" />
          </div>
          <div className="flex justify-center items-center bg-[#f1f1f1] px-2 py-2 rounded-full">
            <img className="w-5 h-5" src="/facebook.png" alt="" />
          </div>
          <div className="flex justify-center items-center bg-[#f1f1f1] px-2 py-2 rounded-full">
            <img className="w-5 h-5" src="/linkedin.png" alt="" />
          </div>
          <div className="flex justify-center items-center bg-[#f1f1f1] px-2 py-2 rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.08567 2.9665C8.9125 2.53374 8.6137 2.16276 8.22776 1.90138C7.84183 1.64 7.38645 1.5002 6.92033 1.5H3.71083C3.12448 1.5 2.56215 1.73293 2.14754 2.14754C1.73293 2.56215 1.5 3.12448 1.5 3.71083C1.5 14.0872 9.91167 22.5 20.2903 22.5C20.8765 22.4997 21.4385 22.2666 21.8529 21.852C22.2672 21.4375 22.5 20.8753 22.5 20.2892V17.0797C22.5 16.6133 22.3603 16.1577 22.0989 15.7716C21.8375 15.3854 21.4664 15.0864 21.0335 14.9132L17.9582 13.6835C17.5676 13.5272 17.1421 13.4794 16.7267 13.5451C16.3112 13.6108 15.9212 13.7876 15.598 14.0568L14.8047 14.7195C14.3572 15.0925 13.7864 15.2847 13.2044 15.2584C12.6224 15.2321 12.0713 14.9891 11.6593 14.5772L9.424 12.3383C9.01233 11.9268 8.76938 11.3762 8.74283 10.7947C8.71628 10.2131 8.90805 9.64271 9.2805 9.19533L9.942 8.402C10.2118 8.07889 10.3891 7.68882 10.4553 7.27311C10.5214 6.8574 10.4739 6.43155 10.3177 6.04067L9.08567 2.9665Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </section>

       {signUp &&  <section className="w-full flex flex-col items-center">
          <p className="text-sm text-center md:w-[15vw] font-[450]">
            By proceeding you agree to investors{" "}
          </p>

          <p className="text-sm text-center md:w-[15vw] text-blue-400">
            Terms of use <span className="text-black">&</span> Privacy policy
          </p>
        </section>}

       {signUp && <p className="text-sm text-center w-full pt-8">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-400">
            Log in
          </Link>
        </p>}
        {!signUp && <p className="text-sm text-center w-full pt-8">
          Create a new account?{" "}
          <Link to="/signup" className="text-blue-400">
            Signup
          </Link>
        </p>}
      </div>
    </div>
  );
};

export default Signup;
