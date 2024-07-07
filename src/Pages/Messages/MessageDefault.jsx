import React from "react";
import Img from "./MsgDefault.jpg";

function Hello() {
  return (
    <>
      <div className="h-full p-5 w-[100%] relative text-center flex justify-center shadow-lg rounded-lg border">
        <div className="h-[100%] w-[100%]">
          <img src={Img} alt="" className="h-[30vh] block mx-auto" />
          <p className="text-3xl text-[gray] my-5">WhatsApp Web</p>
          <p className="text-[gray]">
            Send and receive without keeping your phone online.Use WhatsApp on
            up to 4 linked device and 1 phone at the same time.
          </p>
          <p className="text-[gray] absolute bottom-6 text-center w-[90%]">
            Your personal message are end-to-end encrypted
          </p>
        </div>
      </div>
    </>
  );
}

export default Hello;
