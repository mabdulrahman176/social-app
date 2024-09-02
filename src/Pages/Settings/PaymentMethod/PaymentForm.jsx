import React, { Fragment, useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


let cardArray = [];

function PaymentForm() {
  let navigate = useNavigate();
  let formRef = useRef();
  let formCardMain = useRef();

  const [cardNumber, setCardNumber] = useState("**** **** **** ****");
  const [cardPostal, setCardPostal] = useState("*****");
  const [cardDate, setCardDate] = useState("MM/YY");
  const [cardCVV, setCardCVV] = useState("***");
  const [cardName, setCardName] = useState("Enter Name");
  const [cardAddress, setCardAddress] = useState("Enter Address");
  const [cardTown, setCardTown] = useState("Enter City");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let data = {
      cardNumber: cardNumber,
      cardPostal: cardPostal,
      cardDate: cardDate,
      cardCVV: cardCVV,
      cardName: cardName,
      cardAddress: cardAddress,
      cardTown: cardTown,
    };
    cardArray.push(data);
    console.log(cardArray);

    setCardNumber("**** **** **** ****");
    setCardPostal("*****");
    setCardDate("Enter Date");
    setCardCVV("***");
    setCardName("Enter Name");
    setCardAddress("Enter Address");
    setCardTown("Enter City");

    formRef.current.reset();
  };

  const handleCardRotate = () => {
    formCardMain.current.classList.add("is-flipped");
  };

  const handleCardRotate2 = () => {
    formCardMain.current.classList.remove("is-flipped");
  };

  // inpCvv.current.addEventListener('focusout', ()=>{
  // formCardMain.current.classList.remove("is-flipped");
  // })

  const notify = ()=>{
    toast.success('Card added successfully')
  }



  const handleSubmitButton = ()=>{
      notify()
      setTimeout(() => {
        navigate('/mycards', { state: { cardArray} })
      }, 2000);
  
  }

  return (
    <Fragment>
        <div className="h-full w-full bg-white ">
          <h4 className="flex items-center gap-3 ms-2 h-[10%]">
            <FaAngleLeft
              className="cursor-pointer"
              onClick={() => navigate("/paymentmethod")}
            />{" "}
            Add Card
          </h4>
          <form onSubmit={handleFormSubmit} className="h-[90%]" ref={formRef}>
            <div className="w-[75%] mx-auto h-full flex justify-between">
              <div className="w-[40%]">
                <label htmlFor="" className="block text-sm">
                  Card Number
                </label>
                <input
                  type="number"
                  className="py-2 ps-3 border border-gray-600 rounded-lg focus:outline-none w-full placeholder:text-xs placeholder:text-gray-600"
                  placeholder="Enter title"
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                <div className="flex justify-between my-4">
                  <div className="w-[48%]">
                    <label htmlFor="" className="block text-sm">
                      MM/YY
                    </label>
                    <input
                      type="date"
                      className="py-2 ps-3 border border-gray-600 rounded-lg focus:outline-none w-full placeholder:text-xs placeholder:text-gray-600"
                      placeholder="Enter Date"
                      onChange={(e) => setCardDate(e.target.value)}
                    />
                  </div>
                  <div className="w-[48%]">
                    <label htmlFor="" className="block text-sm">
                      CVV
                    </label>
                    <input
                      type="number"
                      className="py-2 ps-3 border border-gray-600 rounded-lg focus:outline-none w-full placeholder:text-xs placeholder:text-gray-600"
                      placeholder="Enter CVV"
                      onChange={(e) => setCardCVV(e.target.value)}
                      onFocus={handleCardRotate}
                      onBlur={handleCardRotate2}
                    />
                  </div>
                </div>
                <p>Billing Address</p>
                <label htmlFor="" className="block text-sm mt-3">
                  Full Name
                </label>
                <input
                  type="text"
                  className="py-2 ps-3 border border-gray-600 rounded-lg focus:outline-none w-full placeholder:text-xs placeholder:text-gray-600"
                  placeholder="Enter Name"
                  onChange={(e) => setCardName(e.target.value)}
                />

                <p className="flex justify-between">Country </p>

                <label htmlFor="" className="block text-sm mt-3">
                  Address
                </label>
                <input
                  type="text"
                  className="py-2 ps-3 border border-gray-600 rounded-lg focus:outline-none w-full placeholder:text-xs placeholder:text-gray-600"
                  placeholder="Enter Address"
                  onChange={(e) => setCardAddress(e.target.value)}
                  onFocus={handleCardRotate}
                      onBlur={handleCardRotate2}
                />

                <label htmlFor="" className="block text-sm mt-3">
                  Town/City
                </label>
                <input
                  type="text"
                  className="py-2 ps-3 border border-gray-600 rounded-lg focus:outline-none w-full placeholder:text-xs placeholder:text-gray-600"
                  placeholder="Enter Town/City"
                  onChange={(e) => setCardTown(e.target.value)}
                  onFocus={handleCardRotate}
                      onBlur={handleCardRotate2}
                />
              </div>
              <div className="w-[40%]">
                <div className="w-full rounded-lg h-[30vh] border card-container">
                  <div className="card h-full" ref={formCardMain}>
                    <div className="card-face card-front">
                      <div className="mx-auto w-[90%] flex justify-between items-center py-2">
                        <p className="text-xs">
                          current Balance <br />
                          <span className="text-lg">$ 3556</span>
                        </p>
                        <div className="flex">
                          <img
                            src="./img2.jpeg"
                            className="h-[20px] w-[20px] rounded-full"
                            alt=""
                          />
                          <img
                            src="./img2.jpeg"
                            className="h-[20px] w-[20px] rounded-full ml-[-5px]"
                            alt=""
                          />
                        </div>
                      </div>
                      <h1 className="text-sm w-[90%] ms-auto mt-3">
                        {cardName}
                      </h1>
                      <div className="flex absolute bottom-6 justify-between text-xs items-center w-[90%] left-[5%]">
                        <p className="text-xs">{cardNumber}</p>
                        <p>{cardDate}</p>
                      </div>
                    </div>
                    <div className="card-face card-back">
                      <div className="flex justify-center flex-col items-center h-full">
                      <p className="text-lg">
                          Postal: <span>{cardPostal}</span>
                        </p>
                        <p className="text-lg">
                          CVV: <span>{cardCVV}</span>
                        </p>
                      </div>
                      <div className="flex absolute bottom-6 justify-between text-xs items-center w-[90%] left-[5%]">
                        <p className="text-xs">{cardAddress}</p>
                        <p>{cardTown}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="mt-7"> </h1>
                <label htmlFor="" className="block text-sm">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="py-2 ps-3 border border-gray-600 rounded-lg focus:outline-none w-full placeholder:text-xs placeholder:text-gray-600"
                  placeholder="Enter Pin"
                  onChange={(e) => setCardPostal(e.target.value)}
                  onFocus={handleCardRotate}
                      onBlur={handleCardRotate2}
                />

                <button className="py-2 w-full rounded-full border mt-5" onClick={handleSubmitButton}>
                  Save
                </button>
                <ToastContainer />
              </div>
            </div>
          </form>
        </div>
    </Fragment>
  );
}

export default PaymentForm;
