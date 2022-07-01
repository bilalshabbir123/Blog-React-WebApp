import React from 'react'

import { useParams } from 'react-router-dom'

export default function User() {
    const params=useParams();
    const {name}=params;
  return (
    <div>
      <h2>User {name}'s is called</h2>
    </div>
  )
}
