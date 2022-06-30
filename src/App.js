import React from 'react'
import './App.css';
import { Table } from 'react-bootstrap'

export default function App() {
  const users = [
    { name: 'Bilal', email: 'bilal@gmail.com', address: 'Lahore' },
    { name: 'Salman', email: 'salman@gmail.com', address: 'Karachi' },
    { name: 'Zeeshan', email: 'Zeeshan@gmail.com', address: 'Faisalabad' },
    { name: 'Fraz', email: 'Fraz@gmail.com', address: 'Iran' }
  ]
  return (
    <div className="App">
      <h1>Reuse Components with List</h1>
      {
        users.map((items,i) => 
          <h2>
            { items.name } 
          </h2>
        )
      }
    </div>
  )
}

