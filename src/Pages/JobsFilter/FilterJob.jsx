import React, {useState, Fragment } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import JobFilterName from './JobFilterName';

const FilterJob = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeFilter,setActiveFilter] = useState("All")
  const handleShow = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };
  const entrepreneurs = [
    { name: "Tech Entrepreneur" },
    { name: "Biotech Entrepreneur" },
    { name: "Food Entrepreneur" },
    { name: "Fashion Entrepreneur" },
    { name: "Service-Based Entrepreneur" },
    { name: "Social Entrepreneur" },
    { name: "E-Commerce Entrepreneur" },
    { name: "Real Estate Entrepreneur" },
    { name: "Educational Entrepreneur" },
    { name: "Reviews" },
    { name: "Videos" },
    { name: "Duration" },
    { name: "Funds" },
    { name: "Experience" },
    { name: "Strategy" },
    { name: "Exit" },
    { name: "Results" },
    { name: "Market" },
    { name: "Product" },
    { name: "Team" },
    { name: "Timeline" },
  ];

  const entrepreneurs2 = [
    ['Software development', 'Hardware innovation', 'Artificial intelligence','Cybersecurity', 'Internet of Things','Other'],
    ['Drug development ', 'Medical devices', 'Genetic engineering','Bioinformatics','Other'],
    ['Restaurants', 'Food manufacturing', 'Catering services','Specialty foods', 'Health-focused foods','Other'],
    ['Clothing design', 'Accessories', 'Sustainable fashion','Apparel manufacturing', 'Online retail'],
    ['Consulting', 'Marketing services', 'Event planning','Financial services'],
    ['Nonprofit organizations', 'Social enterprises', 'Community development','Environmental conservation','Ethical business practices','other'],
    ['Online retail', 'Dropshiping', 'Subscription-based services','Digital products', 'Marketplace platforms','Other'],
    ['Property development', 'Real estate investment', 'Property management','Real estate technology', 'Commercial real estate','Other'],
    ['Online courses', 'Educational technology', 'Tutoring services','Language schools', 'Educational consulting','Other'],
    ['All', 'Top Reviews','Other'],
    ['Investor', 'Entrepreneur', 'Viewer','Other'],
    ['15 Mins', '30 Mins', '1 hour','+1 hour','Other'],
    ['$ 1M', '$ 5M', '$ 15M','$ 20M'],
    ['1 year', '3 year', '5 year','7 year','10+ year'],
    ['Expansion', 'Marketing', 'R&D','Operations','Debt repayment'],
    ['IPO', 'Strategic partnership', 'Merger','No specific exit plan','Other'],
    ['Acquisition', 'IPO', 'Merger','Strategic partnership','No specific exit plan'],
    ['Local', 'Regional', 'National','International','Global'],
    ['Software', 'Hardware', 'Services','Subscription-Based','Consumer goods'],
    ['Small', 'Medium', 'Large','Experienced','Specialized'],
    ['6Months', '1year', '2years', '3years', 'ongoing', 'other(please specify)']
 ];
 const filteredEntrepreneurs = entrepreneurs.filter((entrepreneur) => {
  if (activeFilter === 'All') return true;
  if (activeFilter === 'Entrepreneur') return !['Reviews', 'Videos', 'Duration', 'Funds', 'Experience', 'Strategy', 'Exit', 'Results', 'Market', 'Product', 'Team', 'Timeline'].includes(entrepreneur.name);
  if (activeFilter === 'Investor') return ['Reviews', 'Funds', 'Experience', 'Strategy', 'Exit', 'Results', 'Market', 'Team', 'Timeline'].includes(entrepreneur.name);
  if(activeFilter === 'Subscribed') return (
      navigate('/videos')
  )
  
  return true;
});
 
  return (
    <Fragment>
     <div className='bg-white py-4 px-2 md:px-6'>
        <div className='flex items-center gap-4 md:gap-6'>
          <Link to='/jobs'>
            <FaArrowLeftLong size={30} className='border-2 border-black p-2 rounded-md' />
          </Link>
          <h1 className='text-xl md:text-2xl font-bold'>Filters</h1>
        </div>
      </div>
    <div className='h-[89%] bg-white overflow-y-auto mt-1'style={{
    'WebkitOverflowScrolling': 'touch',
    'WebkitScrollbar': {
      display: 'none'
    },
    '-msOverflowStyle': 'none',
    'scrollbarWidth': 'none'
  }}>
  <JobFilterName  activeFilter={activeFilter} setActiveFilter={setActiveFilter} name="Catagories"/>
  <div className=" px-3 mt-2 ">
        <div className="flex flex-wrap gap-4 justify-between">
          {filteredEntrepreneurs.map((entrepreneur, index) => (
            <div
              key={index}
              className={`relative w-full sm:w-[48%] md:w-[31%] lg:w-[23%] ${selectedIndex === index ? '' : ''}`}
              style={{ margin: '10px', padding: '10px', cursor: 'pointer' }}
            >
              <div className="flex items-center gap-5 justify-between" onClick={() => handleShow(index)}>
                <p className="text-lg font-semibold mb-3 mt-3">
                  {entrepreneur.name}
                </p>
                <FaAngleDown />
              </div>
              {selectedIndex === index && (
                <div className=" w-full py-5 mt-2">
                  {entrepreneurs2[index].map((elm, ind) => (
                    <div key={ind} className="flex mt-1 py-2">
                      <input type='checkbox' className="me-1" /> <p>{elm}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="fixed lg:bottom-0 bottom-[3rem] right-2 lg:right-[12rem] p-4  w-full flex justify-end gap-4">
          <button className="px-8 py-3 flex-shrink-0 w-auto rounded-2xl border-2 text-[16px] md:text-[18px] linear_gradient_text">
            Reset Filters
          </button>
          <button className="px-8 py-3 flex-shrink-0 w-auto rounded-3xl text-white text-[16px] md:text-[18px] linear_gradient">
            Apply Filters
          </button>
        </div>
    </div>
    </Fragment>
  )
}

export default FilterJob;
