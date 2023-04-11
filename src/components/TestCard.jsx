import React from 'react'

const TestCard = (props) => {
  return (
    <div className="client">
            <div>
            <p className='rating'>{props.rating}</p>
            <h3 className='name'>{props.name}</h3> 
            <p className='review-text'>{props.text}</p> 
            </div>
        </div>
  )
}

export default TestCard