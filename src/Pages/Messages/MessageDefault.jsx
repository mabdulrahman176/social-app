import React from "react";
import Img from "./MsgDefault.jpg";

function Hello() {
  return (
    <div className="h-screen w-full p-5 relative flex flex-col items-center bg-white shadow-lg rounded-lg border overflow-hidden">
      {/* Image */}
      <img
        src={Img}
        alt="TeqTak Web"
        className="h-[30vh] w-auto max-w-full object-cover"
      />
      {/* Title */}
      <p className="text-2xl md:text-3xl text-gray-700 my-5 text-center">
        TeqTak Web
      </p>
      {/* Description */}
      <p className="text-gray-600 px-4 md:px-6 text-center">
        Your personal messages are end-to-end encrypted
      </p>
    </div>
  );
}

export default Hello;
