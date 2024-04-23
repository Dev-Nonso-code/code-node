import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  let { nonso } = useParams()
  console.log(nonso);
  return (
    <>
      <h1>
        welcomme to more details about
        <p>
          {nonso}
        </p>
      </h1>
    </>
  )
}

export default Details