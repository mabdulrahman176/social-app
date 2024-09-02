import React, { useState, Fragment } from 'react';

const JobFilterName = ({ activeFilter, name }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const entrepreneurs = [
    { name: "All" },
    { name: "Tech & Investor" },
    { name: "Teamwork" },
    { name: "Tech & Entrepreneur" },
    { name: "Healthcare" },
    { name: "Marketing" },
    { name: "Career" },
    { name: "Security" },
    { name: "Education & Instruction" },
    { name: "Community" },
    { name: "Administrative" },
    { name: "Business" },
    { name: "ART" },
    { name: "Real Estate" },
    { name: "Sales & Retail" },
    { name: "Legal" },
    { name: "IT" },
    { name: "Construction" },
    { name: "Public relations" },
    { name: "Human resources" },
    { name: "Customer Support" },
    { name: "Design" },
    { name: "Science" },
    { name: "Manufacturing" },
    { name: "Media" },
    { name: "Recruiting" },
    { name: "Technology" },
    { name: "Interviews" },
    { name: "Supply Chain" },
    { name: "Software" },
    { name: "Finance & Accounting" },
    { name: "Engineering" },
    { name: "Protective" },
    { name: "Parenting" },
    { name: "Architecture" },
    { name: "Others" },
  ];

  const handleShow = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <Fragment>
      <div className='p-4'>
        <h1 className='text-xl md:text-2xl font-bold mb-4 ml-4 md:ml-6'>{name}</h1>
        <div className="flex flex-wrap gap-2 md:gap-4">
          {entrepreneurs.map((entrepreneur, index) => (
            <div
              key={index}
              className={`flex items-center justify-center`}
              style={{ margin: '5px', cursor: 'pointer' }}
            >
              <div className="flex items-center" onClick={() => handleShow(index)}>
                <p className={`text-sm md:text-lg font-semibold px-3 py-1 rounded-full bg-[#F1F1F1] ${selectedIndex === index ? 'linear_gradient' : 'hover:linear_gradient'}`}>
                  {entrepreneur.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default JobFilterName;
