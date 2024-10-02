import React from 'react';

const RatingBar = () => {
  return (
    <div className="flex sm:flex-row justify-between items-center bg-white shadow-md rounded-lg p-3 sm:space-y-0 sm:space-x-6 w-full sm:w-auto lg:w-[350px] xl:w-[360px] mx-auto mt-10">
      {/* Investors */}
      <div className="text-center w-full sm:w-1/3">
        <p className="text-sm text-gray-500">Investors</p>
        <p className="text-2xl font-bold text-gray-800">51K</p>
        <div className="h-2 w-full bg-gray-300 rounded-full mt-2">
          <div className="h-2 bg-purple-500 rounded-full" style={{ width: '70%' }}></div>
        </div>
      </div>

      {/* Entrepreneurs */}
      <div className="text-center w-full sm:w-1/3">
        <p className="text-sm text-gray-500">Entrepreneurs</p>
        <p className="text-2xl font-bold text-gray-800">81K</p>
        <div className="h-2 w-full bg-gray-300 rounded-full mt-2">
          <div className="h-2 bg-blue-400 rounded-full" style={{ width: '85%' }}></div>
        </div>
      </div>

      {/* Viewers */}
      <div className="text-center w-full sm:w-1/3">
        <p className="text-sm text-gray-500">Viewers</p>
        <p className="text-2xl font-bold text-gray-800">490</p>
        <div className="h-2 w-full bg-gray-300 rounded-full mt-2">
          <div className="h-2 bg-green-500 rounded-full" style={{ width: '30%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default RatingBar;
