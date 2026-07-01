import React from 'react'

export default function Children({test, children}) {
  return (
    <>
    <h2>This comes from probs -- {test} </h2> 
      <hr />
      <h2>This is children part: </h2>
          {children}
    </>
  )
}
