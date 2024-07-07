import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { SiPayoneer } from "react-icons/si";

function Payment() {
  return (
    <>
      <div className="main h-auto  w-[90%]  m-auto p-4">
        <h3 className="text-3xl font-bold">Payment Method</h3>
        <div className="flex justify-between mt-5">
          <div className="creditcard  h-[80vh] w-[55%] border-r-2 p-4">
            <h4 className="text-2xl">Credit Card</h4>
            <div className="debit h-[7vh] w-[100%] border rounded p-2 mt-2 mb-10">
              <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                  <input type="radio" />
                  <p className="font-semibold">Credit/Debit Card</p>
                </div>
                <div className="flex gap-5 items-center">
                  <FaCcVisa className="text-3xl" />
                  <FaCcMastercard className="text-3xl"/>

                </div>
              </div>

            </div>
            <h4 className="text-2xl mb-10">Pay With</h4>
            <div className="debit h-[7vh] w-[100%] border rounded p-2 mt-2 mb-4">
              <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                  <input type="radio" />
                  <p className="font-semibold">Apply Pay</p>
                </div>
                <div className="flex gap-5 items-center">
                <FaPaypal className="text-3xl"/>

                </div>
              </div>

            </div>

            <div className="debit h-[7vh] w-[100%] border rounded p-2 mt-2 mb-4">
              <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                  <input type="radio" />
                  <p className="font-semibold">Paypal</p>
                </div>
                <div className="flex gap-5 items-center">
                <FaPaypal className="text-3xl"/>

                </div>
              </div>

            </div>

            <div className="debit h-[7vh] w-[100%] border rounded p-2 mt-2 mb-4">
              <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                  <input type="radio" />
                  <p className="font-semibold">Payoneer</p>
                </div>
                <div className="flex gap-5 items-center">
                <SiPayoneer className="text-3xl"/>

                </div>
              </div>

            </div>

            <div className="debit h-[7vh] w-[100%] border rounded p-2 mt-2 mb-4">
              <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                  <input type="radio" />
                  <p className="font-semibold">Other Banks</p>
                </div>
                <div className="flex gap-5 items-center">
                <FaCcMastercard className="text-3xl"/>

                </div>
              </div>

            </div>



          </div>
          <div className="evnetddata h-[80vh] w-[43%] border"></div>
        </div>
      </div>
      
    </>
    
  );
}

export default Payment;
