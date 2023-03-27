import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import inventory from './data/inventory.json'

export default function App() {

  return  (

    <div className="app_container">
      <h1 id="neckflix_label">NECKFLIX</h1>
      <HomePage inventory = {inventory}/>
    </div>

  )

}
