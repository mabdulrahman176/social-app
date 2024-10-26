import React, { useState, Fragment } from 'react';

const JobFilterName = ({ name }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const entrepreneurs = ["All" ,"Tech Entrepreneur","Art","Tech & Investor","Teamwork", "Finance", "Networking","Government", "Charity","Investors","Language learning","Politics","Fashion","History","Hobbies","Career ,& Business","Travel & Outdoor","News","Technology","True Crime","Comedy","Music & dancing","Sports" ,"Science","Leadership","Education","Sustainability","Fiction","Interviews","Business and Finance ","Health ,and Wellness","Self - Imporvement" ,"Music","Religion & Spirituality","Pop Culture","Environment","Parenting","Gaming","Food and Cooking" ,"Pet & Animal","Relationship & Books","Personal Stories","TV & Film","Social Activities","Subscribes","Language","Others"];

 

  return (
    <Fragment>
      <div className='p-4'>
        <h1 className='text-xl md:text-2xl font-bold mb-4 ml-4 md:ml-6'>{name}</h1>
        <div className="flex flex-wrap gap-2 md:gap-4">
        {entrepreneurs.map((filter) => (
                            <p
                                key={filter}
                                onClick={() => setSelectedIndex(filter)}
                                className={`text-sm sm:text-lg cursor-pointer text-nowrap px-2  sm:px-3 rounded-full py-1 bg-[#F1F1F1] w-auto ${selectedIndex === filter ? 'linear_gradient' : 'hover:linear_gradient'}`}
                            >
                                {filter}
                            </p>
                        ))}
        </div>
      </div>
    </Fragment>
  );
}

export default JobFilterName;
