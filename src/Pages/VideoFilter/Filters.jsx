import React, { useState, Fragment } from 'react';
import { FaAngleDown } from "react-icons/fa";
import FilterNav from './FilterNav';
import { useNavigate } from 'react-router-dom';

const Filters = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

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
    ['Software development', 'Hardware innovation', 'Artificial intelligence', 'Cybersecurity', 'Internet of Things', 'Other'],
    ['Drug development', 'Medical devices', 'Genetic engineering', 'Bioinformatics', 'Other'],
    ['Restaurants', 'Food manufacturing', 'Catering services', 'Specialty foods', 'Health-focused foods', 'Other'],
    ['Clothing design', 'Accessories', 'Sustainable fashion', 'Apparel manufacturing', 'Online retail'],
    ['Consulting', 'Marketing services', 'Event planning', 'Financial services'],
    ['Nonprofit organizations', 'Social enterprises', 'Community development', 'Environmental conservation', 'Ethical business practices', 'Other'],
    ['Online retail', 'Dropshipping', 'Subscription-based services', 'Digital products', 'Marketplace platforms', 'Other'],
    ['Property development', 'Real estate investment', 'Property management', 'Real estate technology', 'Commercial real estate', 'Other'],
    ['Online courses', 'Educational technology', 'Tutoring services', 'Language schools', 'Educational consulting', 'Other'],
    ['All', 'Top Reviews', 'Other'],
    ['Investor', 'Entrepreneur', 'Viewer', 'Other'],
    ['15 Mins', '30 Mins', '1 hour', '+1 hour', 'Other'],
    ['$ 1M', '$ 5M', '$ 15M', '$ 20M'],
    ['1 year', '3 years', '5 years', '7 years', '10+ years'],
    ['Expansion', 'Marketing', 'R&D', 'Operations', 'Debt repayment'],
    ['IPO', 'Strategic partnership', 'Merger', 'No specific exit plan', 'Other'],
    ['Acquisition', 'IPO', 'Merger', 'Strategic partnership', 'No specific exit plan'],
    ['Local', 'Regional', 'National', 'International', 'Global'],
    ['Software', 'Hardware', 'Services', 'Subscription-Based', 'Consumer goods'],
    ['Small', 'Medium', 'Large', 'Experienced', 'Specialized'],
    ['6 Months', '1 year', '2 years', '3 years', 'Ongoing', 'Other (please specify)']
  ];

  const handleShow = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const filteredEntrepreneurs = entrepreneurs.filter((entrepreneur) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Entrepreneur') return !['Reviews', 'Videos', 'Duration', 'Funds', 'Experience', 'Strategy', 'Exit', 'Results', 'Market', 'Product', 'Team', 'Timeline'].includes(entrepreneur.name);
    if (activeFilter === 'Investor') return ['Reviews', 'Funds', 'Experience', 'Strategy', 'Exit', 'Results', 'Market', 'Team', 'Timeline'].includes(entrepreneur.name);
    if (activeFilter === 'Subscribed') {
      navigate('/videos');
      return false;
    }
    return true;
  });

  return (
    <Fragment>
      <FilterNav activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <div className="bg-white px-2 md:px-4 mt-2 overflow-y-auto h-[21.5rem]" style={{ WebkitOverflowScrolling: 'touch', WebkitScrollbar: { display: 'none' }, '-msOverflowStyle': 'none', scrollbarWidth: 'none' }}>
        <div className="flex flex-wrap gap-4 justify-between">
          {filteredEntrepreneurs.map((entrepreneur, index) => (
            <div
              key={index}
              className={`relative w-full sm:w-[48%] md:w-[31%] lg:w-[23%] ${selectedIndex === index ? '' : ''}`}
              style={{ margin: '10px', padding: '10px', cursor: 'pointer' }}
            >
              <div className="flex items-center gap-3 md:gap-5 justify-between" onClick={() => handleShow(index)}>
                <p className="text-sm md:text-lg font-semibold mb-2 md:mb-3 mt-2 md:mt-3">
                  {entrepreneur.name}
                </p>
                <FaAngleDown />
              </div>
              {selectedIndex === index && (
                <div className="w-full py-3 md:py-5 mt-2">
                  {entrepreneurs2[index].map((elm, ind) => (
                    <div key={ind} className="flex mt-1 py-1 md:py-2 items-center">
                      <input type='checkbox' className="me-2" />
                      <p className="text-sm md:text-base">{elm}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between bg-white px-2 md:px-4 py-2'>
        <button className="px-4 py-2 md:px-6 md:py-3 flex-shrink-0 w-full md:w-auto ms-2 my-2 mr-4 flex items-center justify-center border-2 text-sm md:text-lg linear_gradient_text rounded-xl">
          Reset Filters
        </button>
        <button className="px-4 py-2 md:px-6 md:py-3 flex-shrink-0 w-full md:w-auto ms-2 my-2 mr-4 flex items-center justify-center linear_gradient text-white text-sm md:text-lg rounded-xl">
          Apply Filters
        </button>
      </div>
    </Fragment>
  );
};

export default Filters;
