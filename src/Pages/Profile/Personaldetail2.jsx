import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Personaldetail2() {


  const [user, setUser] = useState({})



  const handleSubmit = async()=>{
    const req = await fetch('http://localhost:5000/users/',{
      credentials:'include',
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    const d = await req.json()
    console.log(d)
    console.log(user)
    // navigate('/jobs')
    // JobStates.setJobSubmitted(!JobStates.jobSubmitted)
  }

  const _onChange_=(e)=>{
    setUser((prev)=>{
      return {
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

  return (
    <Fragment>
      <div className="h-full bg-white w-full px-6"> {/* Added padding */}
      <div className="flex items-center gap-4 pt-2">
  <Link to='/personaldetails'>
            <FaArrowLeftLong size={30} className='border-2 border-black p-1 rounded-md' />
          </Link>
    <p className="text-2xl font-semibold pl-4">Personal Details</p>
  </div>
        <Link className="text-[#9595f5] mb-5 block">Edit Detail</Link>

        <p className="text-lg font-semibold mt-5">Total Subscriber</p>
        <p className="text-[gray]">53,324 Subscribers</p>

        <p className="text-xl font-semibold mt-5">Description</p>
        <p className="text-[gray]">
          I am [Entrepreneur's Name], a passionate innovator dedicated to
          reshaping industries. With creativity and resilience, I thrive in the
          entrepreneurial realm, turning challenges into opportunities. Join me
          as I make my mark on the world.{" "}
          <Link className="text-[#9292e9]">Read more</Link>
        </p>

        <p className="text-xl font-semibold mt-5">Personal info</p>

        <div className="flex flex-wrap mt-5"> {/* Added flex-wrap for responsive behavior */}
          <div className="w-full md:w-[50%] "> {/* Adjusted width and spacing */}
            <form>
              <label htmlFor="fname" className="block text-base font-medium"> {/* Adjusted font size */}
                First Name
              </label>
              <input
                type="text"
                id="fname"
                name="name"
                placeholder="Enter Your First Name"
                className="border mt-2 mb-3 w-full md:w-[80%] p-2 rounded-lg"
                onChange={_onChange_}
              />
              <label htmlFor="work" className="block text-base font-medium">
                Work Experience
              </label>
              <input
                type="text"
                id="work"
                name=" work_experience"
                placeholder="Enter Your Experience"
                className="border mt-2 mb-5 w-full md:w-[80%] p-2 rounded-lg"
                onChange={_onChange_}
              />

              <label htmlFor="location" className="block text-base font-medium">
                Location
              </label>
              <input
                type="text"
                id="location"
                name=" location"
                placeholder="Enter Your Location"
                className="border mt-2 mb-5 w-full md:w-[80%] p-2 rounded-lg"
                onChange={_onChange_}
              />
            </form>
          </div>

          <div className="w-full md:w-[50%] ">
            <label htmlFor="lname" className="block text-base font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name=" name"
              placeholder="Enter Your Last Name"
              className="border mt-2 mb-5 w-full md:w-[80%] p-2 rounded-lg"
              onChange={_onChange_}
            />
            <label htmlFor="study" className="block text-base font-medium">
              Education
            </label>
            <input
              type="text"
              id="study"
              name=" education"
              placeholder="Enter Your Education"
              className="border mt-2 mb-5 w-full md:w-[80%] p-2 rounded-lg"
              onChange={_onChange_}
            />
            <button className="text-white w-[100px] rounded-md linear_gradient p-1" onClick={handleSubmit}>Save</button>
          </div>
          
        </div>
      </div>
    </Fragment>
  );
}

export default Personaldetail2;
