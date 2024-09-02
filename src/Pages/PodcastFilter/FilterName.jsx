import React, { useState, Fragment } from 'react';

const FilterName = ({ activeFilter, name }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const entrepreneurs = [
    { name: "All" },
    { name: "Tech Entrepreneur" },
    { name: "Art" },
    { name: "Tech & Investor" },
    { name: "Teamwork" },
    { name: "Finance" },
    { name: "Networking" },
    { name: "Government" },
    { name: "Charity" },
    { name: "Language learning" },
    { name: "Politics" },
    { name: "Fashion" },
    { name: "History" },
    { name: "Hobbies" },
    { name: "Career & Business" },
    { name: "Travel & Outdoor" },
    { name: "Investors" },
    { name: "News" },
    { name: "Technology" },
    { name: "True Crime" },
    { name: "Comedy" },
    { name: "Music & dancing" },
    { name: "Sports" },
    { name: "Science" },
    { name: "Leadership" },
    { name: "Sustainability" },
    { name: "Fiction" },
    { name: "Education" },
    { name: "Interviews" },
    { name: "Technology" },
    { name: "Business and Finance " },
    { name: "History" },
    { name: "Health and Wellness" },
    { name: "Self - Imporvement" },
    { name: "Religion & Spirituality" },
    { name: "Pop Culture" },
    { name: "Environment" },
    { name: "Music" },
    { name: "Parenting" },
    { name: "Fashion" },
    { name: "Gaming" },
    { name: "Food and Cooking" },
    { name: "Relationship & Books" },
    { name: "Personal Stories" },
    { name: "Pet & Animal" },
    { name: "Travel & Outdoor" },
    { name: "TV & Film" },
    { name: "Social Activities" },
    { name: "Subscribes" },
    { name: "Language" },
    { name: "Others" },
  ];

  const filteredEntrepreneurs = entrepreneurs.filter((entrepreneur) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Entrepreneur') return !['Reviews', 'Videos', 'Duration', 'Funds', 'Experience', 'Strategy', 'Exit', 'Results', 'Market', 'Product', 'Team', 'Timeline'].includes(entrepreneur.name);
    if (activeFilter === 'Investor') return ['Reviews', 'Funds', 'Experience', 'Strategy', 'Exit', 'Results', 'Market', 'Team', 'Timeline'].includes(entrepreneur.name);
    return true;
  });

  const handleShow = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <Fragment>
      <div className="bg-white h-[62%] px-3 mt-2 overflow-y-auto" style={{
        'WebkitOverflowScrolling': 'touch',
        'WebkitScrollbar': {
          display: 'none'
        },
        '-msOverflowStyle': 'none',
        'scrollbarWidth': 'none'
      }}>
        <h1 className='text-xl sm:text-2xl font-bold ml-4 sm:ml-10 my-3'>{name}</h1>
        <div className="flex flex-wrap my-3 mr-4 sm:mr-18 ml-4 sm:ml-10">
          {filteredEntrepreneurs.map((entrepreneur, index) => (
            <div
              key={index}
              className={`${selectedIndex === index}`}
              style={{ margin: '5px', cursor: 'pointer' }}
            >
              <div className="flex items-center justify-between" onClick={() => handleShow(index)}>
                <p className={`text-sm sm:text-lg font-semibold px-2 sm:px-3 rounded-full py-1 bg-[#F1F1F1] ${selectedIndex === index ? 'linear_gradient' : 'hover:linear_gradient'}`}>
                  {entrepreneur.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default FilterName;
