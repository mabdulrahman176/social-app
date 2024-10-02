import React from 'react';

const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r py-10">
      <div className="max-w-4xl w-full bg-indigo-800 text-white p-10 rounded-lg shadow-lg flex flex-col md:flex-row">
        {/* Form Section */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-5">Just say Hello !</h2>
          <p className="text-sm mb-8">Let us know more about you!</p>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-2 rounded-md bg-gray-100 text-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-2 rounded-md bg-gray-100 text-black"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Mail"
                className="w-1/2 p-2 rounded-md bg-gray-100 text-black"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-1/2 p-2 rounded-md bg-gray-100 text-black"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-2 h-24 rounded-md bg-gray-100 text-black"
            />
            <button className="w-full py-2 bg-pink-500 rounded-md text-white font-semibold hover:bg-pink-600">
              SUBMIT
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="md:w-1/3 mt-10 md:mt-0 md:ml-10">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <p className="text-sm">
            77 Baker Street <br />
            Bondowoso, 87655 <br />
            Indonesia
          </p>
          <p className="mt-4 text-sm">
            Call Us: <br />
            +62 81 334 61 00
          </p>
          <p className="mt-4 text-sm">
            We are open from Monday - Friday <br />
            08:00 am - 05:00 pm
          </p>
          <h4 className="text-lg font-bold mt-8">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-pink-500 hover:text-pink-600">
              facebook
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-600">
              instagram
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-600">
              vimeo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
