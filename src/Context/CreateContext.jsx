import React, {  Fragment, createContext, useState } from 'react'
export let myContext = createContext()

function CreateContext({children}) {
  const [creationPodcast, setCreationPodcast] = useState(false)
  const [podcastSubmitted,setPodcastSubmitted]=useState(false)
  const [eventSubmitted,setEventSubmitted]=useState(false)
  const [jobSubmitted,setJobSubmitted]=useState(false)
  const [jobAppliedSuccess, setJobAppliedSuccess] = useState(false)



  return (
    <Fragment>
      <myContext.Provider value={{
        CreationStates : {
            creationPodcast,
            setCreationPodcast
        },
        PodcastStates : {
            podcastSubmitted,
            setPodcastSubmitted
        },
        EventStates : {
          eventSubmitted,
          setEventSubmitted
      },
        JobStates : {
          jobSubmitted,
          setJobSubmitted
      },
      JobAppliedStates : {
        jobAppliedSuccess,
        setJobAppliedSuccess
    },

      }}>
        {
            children
        }
      </myContext.Provider>

    </Fragment>
  )
}

export default CreateContext

