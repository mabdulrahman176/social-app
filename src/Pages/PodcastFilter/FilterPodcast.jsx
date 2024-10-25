import React, { useState, Fragment } from 'react';
import PodcastFilterNav from './PodcastFilterNav';
import FilterName from './FilterName';

const FilterPodcast = () => {
    const [subFilter, setsubFilter] = useState('All');
    const subscirbe = ['All', 'Subscribe', 'Popular', 'Latest Podcast', 'Other'];
    const review = ['ALL', 'Top Reviews', 'Others'];
    const duration = ['15min', '30min', '1hour', '+1hours', 'Other'];
    const entrepreneurs = ["All" ,"Tech Entrepreneur","Art","Tech & Investor","Teamwork", "Finance", "Networking","Government", "Charity","Investors","Language learning","Politics","Fashion","History","Hobbies","Career ,& Business","Travel & Outdoor","News","Technology","True Crime","Comedy","Music & dancing","Sports" ,"Science","Leadership","Education","Sustainability","Fiction","Interviews","Business and Finance ","Health ,and Wellness","Self - Imporvement" ,"Music","Religion & Spirituality","Pop Culture","Environment","Parenting","Gaming","Food and Cooking" ,"Pet & Animal","Relationship & Books","Personal Stories","TV & Film","Social Activities","Subscribes","Language","Others"];
    const [durationFilter, setDurationFilter] = useState("15min");
    const [activeFilter, setActiveFilter] = useState("All");
    const [reviewFilter, setReviewFilter] = useState("All");
    const [selectedIndex, setSelectedIndex] = useState("All");
    return (
        <Fragment>
            <PodcastFilterNav activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <div className='h-[73%] bg-white overflow-y-auto' style={{
                'WebkitOverflowScrolling': 'touch',
                'WebkitScrollbar': {
                    display: 'none'
                },
                '-msOverflowStyle': 'none',
                'scrollbarWidth': 'none'
            }}>
                {/* <FilterName activeFilter={activeFilter} name="Categories" /> */}
                <div className='my-3'>
                    <h1 className='text-2xl font-bold ms-4 md:ms-10'>Categories</h1>
                    <div className="flex flex-wrap gap-2 ms-2 md:gap-4 mt-4 md:mt-8">
                        {entrepreneurs.map((filter) => (
                            <p
                                key={filter}
                                onClick={() => setSelectedIndex(filter)}
                                className={`text-sm sm:text-lg text-nowrap px-2  sm:px-3 rounded-full py-1 bg-[#F1F1F1] w-auto ${selectedIndex === filter ? 'linear_gradient' : 'hover:linear_gradient'}`}
                            >
                                {filter}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='my-3'>
                    <h1 className='text-2xl font-bold ms-4 md:ms-10'>Subscribed</h1>
                    <div className="flex flex-wrap gap-2 md:gap-4 mt-4 md:mt-8">
                        {subscirbe.map((filter) => (
                            <p
                                key={filter}
                                onClick={() => setsubFilter(filter)}
                                className={`px-3 py-2 flex-shrink-0 
                                ${filter === 'Latest Podcast' ? 'w-auto' : 'w-28 md:w-36'} 
                                ${filter === 'All' ? 'ms-4 md:ms-16' : 'ms-2 md:ms-2'} 
                                flex items-center justify-center relative cursor-pointer bg-[#F1F1F1] rounded-lg text-base md:text-xl 
                                ${subFilter === filter ? 'linear_gradient' : 'hover:linear_gradient'}`}
                            >
                                {filter}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='my-3'>
                    <h1 className='text-2xl font-bold ms-4 md:ms-10'>Reviews</h1>
                    <div className="flex flex-wrap gap-2 md:gap-4 mt-2 md:mt-4">
                        {review.map((item) => (
                            <p
                                key={item}
                                onClick={() => setReviewFilter(item)}
                                className={`px-3 py-2 flex-shrink-0 
                                ms-4 md:ms-14 
                                flex items-center justify-center relative cursor-pointer bg-[#F1F1F1] rounded-lg text-base md:text-xl 
                                ${reviewFilter === item ? 'linear_gradient' : 'hover:linear_gradient'}`}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='my-3'>
                    <h1 className='text-2xl font-bold ms-4 md:ms-10'>Duration</h1>
                    <div className="flex flex-wrap gap-2 md:gap-4 mt-4 md:mt-8">
                        {duration.map((items) => (
                            <p
                                key={items}
                                onClick={() => setDurationFilter(items)}
                                className={`px-3 py-2 flex-shrink-0 
                                ${items === '15min' ? 'ms-4 md:ms-16' : 'ms-2 md:ms-2'} 
                                flex items-center justify-center relative cursor-pointer bg-[#F1F1F1] rounded-lg text-base md:text-xl 
                                ${durationFilter === items ? 'linear_gradient' : 'hover:linear_gradient'}`}
                            >
                                {items}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='flex justify-end mb-8'>
                    <button className="px-4 py-2 md:px-8 md:py-3 flex-shrink-0 w-auto ms-2 my-2 mr-2 md:mr-4 flex items-center relative cursor-pointer border-2 text-sm md:text-[18px] linear_gradient_text rounded-lg md:rounded-2xl">
                        Reset Filters
                    </button>
                    <button className="px-4 py-2 md:px-8 md:py-3 flex-shrink-0 w-auto ms-2 rounded-lg md:rounded-3xl flex items-center relative cursor-pointer linear_gradient my-2 mr-2 md:mr-4 text-white text-sm md:text-[16px]">
                        Apply Filters
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default FilterPodcast;
