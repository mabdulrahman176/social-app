import React, { useState } from "react";

const AddSpeaker = () => {
  const [showAdditionalForms, setShowAdditionalForms] = useState(false);

  const handleClick = () => {
    setShowAdditionalForms(true);
  };

  return (
    <div>
      <form>
        <label class="block text-gray-600 text-sm font-bold" for="">
          Add Speaker*
        </label>
        <input
          onClick={handleClick}
          className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
          id="username"
          type="text"
          placeholder="Mention @ to tag a person "
        />
      </form>

      {showAdditionalForms && (
        <div className="">
          <form>
            <label className="block my-4 text-gray-600 text-sm font-bold">
              Name*
              <input
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
                id="username"
                type="text"
                placeholder="Name "
              />
            </label>
          </form>
          <form className="">
            <label className="block text-gray-600 text-sm font-bold">
              Family Name*
              <input 
              placeholder="Mention @ to tag a person "
              className=" w-full border py-2 ps-3 rounded-lg  text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs" />
            </label>
          </form>
          <form className="my-4">
            <label className="block text-gray-600 text-sm font-bold ">
              Share thier Business Profile Link
              <input 
              placeholder="Mention @ to tag a person "
              className=" w-full border py-2 ps-3 rounded-lg  text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs" />
            </label>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddSpeaker;
