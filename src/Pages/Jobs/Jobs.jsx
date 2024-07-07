import React, { Fragment } from 'react'
import JobFilters from './JobFilters'
import AllJobsCategories from './AllJobsCategories'

function Jobs() {
  return (
    <Fragment>
      <section className='h-full w-full'>
        <JobFilters/>
        <AllJobsCategories/>

      </section>
    </Fragment>
  )
}

export default Jobs
