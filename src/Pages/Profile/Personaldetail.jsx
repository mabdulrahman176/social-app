import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { fetchDetail } from "../../API";

function Personaldetail() {
  const { id } = useParams(); // Get ID from URL parameters
  const [selectedindex, setSelectedindex] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null); // State to manage which dropdown is open
  const [detail, setDetail] = useState({});

  // Define arrays here
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
    { name: "Experiance" },
    { name: "Strategy" },
    { name: "Exit" },
    { name: "Results" },
    { name: "Market" },
    { name: "Product" },
    { name: "Team" },
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
    ['1 year', '3 year', '5 year', '7 year', '10+ year'],
    ['Expansion', 'Marketing', 'R&D', 'Operations', 'Debt repayment'],
    ['IPO', 'Strategic partnership', 'Merger', 'No specific exit plan', 'Other'],
    ['Acquisition', 'IPO', 'Merger', 'Strategic partnership', 'No specific exit plan'],
    ['Local', 'Regional', 'National', 'International', 'Global'],
    ['Software', 'Hardware', 'Services', 'Subscription-Based', 'Consumer goods'],
    ['Small', 'Medium', 'Large', 'Experienced', 'Specialized'],
  ];

  const toggleDropdown = (field) => {
    setOpenDropdown(openDropdown === field ? null : field);
  };

  const handleShow = (index) => {
    setSelectedindex(selectedindex === index ? null : index);
  };
  const getprofileDetail = async () => {
      try {
        const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${getUserId()}`) 
        const data = await req.json() 
        console.log("personal data is",data)
        setDetail(data.user);
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    const getUserId = () => {
    const str = document.cookie
    const userKey = str.split('=')[1];
    return userKey
  }

  useEffect(() => {
    console.log("fetching user pernsal info")
      getprofileDetail();
  }, []);

  return (
    <Fragment>
      <div className="h-full overflow-y-auto bg-white w-full px-3">
        <div className="p-5">
          <div className="flex items-center mb-4">
            <Link to='/profile'>
              <FaArrowLeftLong size={30} className='border-2 border-black p-1 rounded-md' />
            </Link>
            <p className="text-2xl font-semibold pl-4">Personal Details</p>
          </div>
          <Link to='/personaldetail2' className="text-[#9595f5]">Edit Detail</Link>
          <p className="text-lg font-semibold mt-5">Total Subscriber</p>
          <p className="text-[gray]">53,324 Subscribers</p>
          <p className="text-xl font-semibold mt-5">Description</p>
          <p className="text-[gray]">
            {detail.description || 'No description available.'}
            <Link className="text-[#9292e9]">Read more</Link>
          </p>
          <p className="text-xl font-semibold mt-5">Personal info</p>
          <div className="p-5">
            <div className="flex flex-wrap gap-4 mt-5">
              {/* Name field with dropdown */}
              <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[50%]">
                <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => toggleDropdown('name')}>
                  <p className="text-base font-medium">Name</p>
                  <FaAngleDown className={`transition-transform ${openDropdown === 'name' ? 'rotate-180' : ''}`} />
                </div>
                {openDropdown === 'name' && (
                  <div className="border p-2 rounded-md">
                    <span>{detail.name || 'No name available.'}</span>
                  </div>
                )}
              </div>

              {/* Work field with dropdown */}
              <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[45%]">
                <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => toggleDropdown('work')}>
                  <p className="text-base font-medium">Work</p>
                  <FaAngleDown className={`transition-transform ${openDropdown === 'work' ? 'rotate-180' : ''}`} />
                </div>
                {openDropdown === 'work' && (
                  <div className="border p-2 rounded-md">
                    <span>{detail.work_experience || 'No work experience available.'}</span>
                  </div>
                )}
              </div>

              {/* Education field with dropdown */}
              <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[50%]">
                <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => toggleDropdown('education')}>
                  <p className="text-base font-medium">Education</p>
                  <FaAngleDown className={`transition-transform ${openDropdown === 'education' ? 'rotate-180' : ''}`} />
                </div>
                {openDropdown === 'education' && (
                  <div className="border p-2 rounded-md whitespace-nowrap">
                    <span>{detail.education || 'No education details available.'}</span>
                  </div>
                )}
              </div>

              {/* Location field with dropdown */}
              <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[45%]">
                <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => toggleDropdown('location')}>
                  <p className="text-base font-medium">Location</p>
                  <FaAngleDown className={`transition-transform ${openDropdown === 'location' ? 'rotate-180' : ''}`} />
                </div>
                {openDropdown === 'location' && (
                  <div className="border p-2 rounded-md">
                    <span>{detail.location || 'No location information available.'}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <p className="text-xl font-semibold mt-5">More info</p>
          <div className="flex flex-wrap gap-4 justify-between">
            {entrepreneurs.map((entrepreneur, index) => (
              <div
                key={index}
                className={`relative w-full sm:w-[48%] md:w-[31%] lg:w-[23%]`}
                style={{ margin: '10px', padding: '10px', cursor: 'pointer' }}
              >
                <div className="flex items-center gap-3 md:gap-5 justify-between" onClick={() => handleShow(index)}>
                  <p className="text-sm md:text-lg font-semibold mb-2 md:mb-3 mt-2 md:mt-3">
                    {entrepreneur.name}
                  </p>
                  <FaAngleDown />
                </div>
                {selectedindex === index && (
                  <div className="w-full py-3 md:py-5 mt-2" style={{ left: "0" }}>
                    {entrepreneurs2[index]?.map((elm, ind) => (
                      <div key={ind} className="flex mt-1 py-1 md:py-2 items-center">
                        <input type="checkbox" className="me-2" />
                        <p className="text-sm md:text-base">{elm}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Personaldetail;
