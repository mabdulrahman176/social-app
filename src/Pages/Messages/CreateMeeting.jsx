import React from "react";

function Zoommeeting() {
  return (
    <>
      <div className="bg-white w-full h-full">
      <div className="main h-full overflow-y-scroll Podcast_Top_Videos w-[90%] m-[auto]">
        <p className="text-3xl font-semibold">Create a Zoom meeting</p>
        <p className="text-xl font-semibold">To:</p>
        <div className="div h-[8vh] w-[10%] bg-gray-100 rounded-xl p-3">
          <div className="flex items-center gap-1">
            <img
              src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="h-[30px] w-[30px] rounded-full"
            />
            <p className="font-medium">Haroon</p>
          </div>
        </div>

        <form action="" className="mt-8">
          <div className="flex">
            <div className="div h-[auto] w-[50%]">
              <label htmlFor="" className="block text-lg font-medium">
                Meeting Title *
              </label>
              <input
                type="text"
                placeholder="First interview"
                className="w-[60%] border outline-none rounded-lg p-3  mb-7 mt-1"
              />
              <label htmlFor="" className="block text-lg font-medium">
                Select your time zone *
              </label>
              <select
                name=""
                id=""
                className="border w-[60%] p-3 rounded-lg outline-none mt-1 mb-7"
              >
                <option value="">
                  <p className="text-[gray]">
                    UTC+5:45 Estern Standard Time, Nepal 4:30 PM
                  </p>
                </option>
                <option value=""></option>
              </select>

              <label htmlFor="" className="block text-lg font-medium">
                Select data *
              </label>
              <select
                name=""
                id=""
                className="border w-[60%] p-3 rounded-lg outline-none mt-1 mb-7"
              >
                <option value="">
                  <p className="text-[gray]">Selet data</p>
                </option>
                <option value=""></option>
              </select>
              <div className="flex">
                <div className="div w-[30%] h-[auto]">
                  <label htmlFor="" className="block text-lg font-medium">
                    Start time *
                  </label>
                  <select
                    name=""
                    id=""
                    className="border w-[95%] p-3 rounded-lg outline-none mt-1 mb-7"
                  >
                    <option value="">
                      <p className="text-[gray]">Entry-Level</p>
                    </option>
                    <option value=""></option>
                  </select>
                </div>
                <div className="div w-[30%] h-[auto]">
                  <label htmlFor="" className="block text-lg font-medium">
                    End time*
                  </label>
                  <select
                    name=""
                    id=""
                    className="border w-[95%] p-3 rounded-lg outline-none mt-1 mb-7"
                  >
                    <option value="">
                      <p className="text-[gray]">Entry-Level</p>
                    </option>
                    <option value=""></option>
                  </select>
                </div>
              </div>
            </div>

            <div className="div h-[auto] w-[50%]">
              <label htmlFor="" className="block text-lg font-medium">
                Paste Call Link *
              </label>
              <div className="h-[8vh] w-[60%] border rounded-lg  pt-3 p-2 ">
                <p className="text-[gray]">Paste Link</p>

                <label htmlFor="" className="block text-lg font-medium mt-10">
                  Any Text *
                </label>
                <input
                  type="text"
                  placeholder="First interview"
                  className="w-[100%]  border outline-none rounded-lg  pb-[130px] p-3  mb-7 mt-1"
                />

                <button className="h-[7vh] w-[100%] rounded-3xl text-[white] mt-5 btnsch">
                  Schedule meeting
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default Zoommeeting;
