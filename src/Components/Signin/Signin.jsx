import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const Signin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting data:", state);
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });
  
      console.log({ response });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        // Store any tokens or user info as needed
        navigate('/videos');
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false); // Reset loading state here
    }
  };
  
  return (
    <div className="w-[100vw] h-[100vh] grid place-items-center bg-blue-200">
      <div className="w-full h-full md:h-[95vh] md:w-[27rem] bg-white flex flex-col justify-between items-center md:items-center px-10 py-4">
        <section className="flex flex-col gap-2 items-center py-[1px] w-[19rem]">
          <div className="flex justify-center items-center border-[1px] border-gray-300 rounded w-full">
            <button
              onClick={() => navigate("/signup")}
              className="text-black w-full py-[10px] text-xs font-semibold rounded"
            >
              Sign up
            </button>
            <button
              onClick={() => navigate("/signin")}
              className="linear_gradient w-full py-[10px] text-xs font-semibold rounded"
            >
              Sign in
            </button>
          </div>

          <h1 className="font-bold text-start my-4">Welcome Back!</h1>

          <form className="flex flex-col w-[22rem] gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              value={state.email}
              onChange={handleChange}
              className="py-2 px-4 rounded outline-none border-[1px] border-gray-200 placeholder:text-xs"
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={state.password}
              onChange={handleChange}
              className="py-2 px-4 rounded outline-none border-[1px] border-gray-200 placeholder:text-xs"
              required
            />
            <section className="flex items-center mt-6 justify-center">
              <button
                type="submit"
                 className="w-full mb-4  py-3 rounded-3xl font-semibold linear_gradient text-black"
                 disabled={loading}
              >
                {loading ? "Loading..." : "Sign In"}
              </button>
            </section>
          </form>
        </section>
        <div className="flex flex-row w-full items-center">
          <div className="w-full h-[1px] bg-black"></div>
          <div className="px-2 text-black text-sm whitespace-nowrap bg-white">or continue with</div>
          <div className="w-full h-[1px] bg-black"></div>
        </div>

        <section className="flex items-center justify-between w-full md:my-2">
          <div
            className="flex justify-center items-center bg-[#f1f1f1] w-[4rem] h-[4rem] px-2 py-2 rounded-full cursor-pointer"
            onClick={() => window.open(`${process.env.REACT_APP_API_BASE_URL}/auth/google`)}
          >
            <img className="w-10 h-10" src="/google.png" alt="Google" />
          </div>
          <div
            className="flex justify-center items-center bg-[#f1f1f1] p-[.3rem] w-[4rem] h-[4rem] rounded-full cursor-pointer"
            onClick={() => window.open(`${process.env.REACT_APP_API_BASE_URL}/auth/github`)}
          >
            <FaGithub className="text- w-8 h-8"/>
          </div>
          <div className="flex justify-center items-center bg-[#f1f1f1] w-[4rem] h-[4rem] px-2 py-2 rounded-full cursor-pointer"
              onClick={() => window.open(`${process.env.REACT_APP_API_BASE_URL}/auth/facebook`)}
          >
            <FaFacebookF className="text-blue-800 w-8 h-8"/>
          </div>
          <div className="flex justify-center items-center bg-[#f1f1f1] w-[4rem] h-[4rem] px-2 py-2 rounded-full cursor-pointer">
            <svg
              width="28"
              height="28"
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

        <section className="w-full flex flex-col items-center">
          <p className="text-sm text-center md:w-[15vw] font-[450]">
            By proceeding you agree to investors{" "}
          </p>

          <p className="text-sm text-center md:w-[15vw] text-blue-400">
            Terms of use <span className="text-black">&</span> Privacy policy
          </p>
        </section>

        <p className="text-sm text-center w-full pt-8">
          If you don't have an account?{" "}
          <Link to="/signup" className="text-blue-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
