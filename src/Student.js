import React from 'react'

export default function Student(props) {
    console.warn(props)
  return (
    <div style={{backgroundColor:"skyblue",margin:10}}>
      <h3>Hi {props.name}</h3>
      {/* <h3>Email :{props.email}</h3>
<h4>Address {props.other.address}</h4> */}
    </div>
  )
}
