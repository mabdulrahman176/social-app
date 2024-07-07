import React, { Fragment } from 'react'
import PodcastFilters from './PodcastFilters'
import PodcastTopVideos from './PodcastTopVideos'

function Podcast() {
  return (
    <Fragment>
      <div className='w-full h-full'>
      <PodcastFilters/>
      <PodcastTopVideos/>
      </div>
    </Fragment>
  )
}

export default Podcast
