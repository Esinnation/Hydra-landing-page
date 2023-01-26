import React from 'react'

function Contact(props) {
  return (
    <div className='flex items-center justify-center space-y-5'>
      <img src={props.Icon} alt="" />
      <div className=''>
        <h4>{props.head}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default Contact