import React, { Fragment } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PaymentMethod() {
  let navigate = useNavigate();

  return (
    <Fragment>
        <div className="h-full bg-white w-full">
          <h4 className="flex items-center gap-3 ms-2 h-[10%]">
            <FaAngleLeft
              className="cursor-pointer"
              onClick={() => navigate("/settings")}
            />{" "}
            Add Payment Card
          </h4>
          <div className="h-[15%] w-[85%] mx-auto">
            <p >Paymeny Method</p>
            <p className="text-blue-700 py-2">Add payment method</p>
          </div>

          <div className="h-[75%] flex items-center justify-center w-full">
            <div className="h-[60%] w-[35%] bg-white shadow-lg py-4 border rounded-lg">
              <hr className="w-[10%] border-2 mx-auto border-black mb-3 rounded-full" />
              <p className="text-black text-center text-sm">
                Add Payment Method
              </p>

              <hr className="w-full border-1 mx-auto border-gray-200 my-2 rounded-full" />
              <div className="w-[90%] ms-auto">
                <p
                  className="py-3 cursor-pointer"
                  onClick={() => navigate("/paymentform")}
                >
                  Crdeit or debsit card
                </p>
                <hr className="w-full border-1 mx-auto border-gray-200 my-2 rounded-full" />
                <p
                  className="py-3 cursor-pointer"
                  onClick={() => navigate("/paymentform")}
                >
                  Paypal
                </p>
                <hr className="w-full border-1 mx-auto border-gray-200 my-2 rounded-full" />
                <p
                  className="py-3 cursor-pointer"
                  onClick={() => navigate("/paymentform")}
                >
                  Apple pay
                </p>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default PaymentMethod;
