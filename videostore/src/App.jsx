import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import orginventory from './data/inventory.json'

export default function App() {

  const [inventory, setInventory] = useState(orginventory);

  const checkoutOrReturnFilmById = (id, m) => {
    const newInventory = [...inventory];
    const filmToReturn = newInventory.find(film => film.id === id);
    if (m === 'checkout') {
      filmToReturn.copiesAvailable.current--;
    } else if (m === 'return') {
      filmToReturn.copiesAvailable.current++;
    } else {
      console.error(`Unknown checkout or return method: ${m}`)
    }
    setInventory(newInventory)
  }


  return  (

    <div className="app_container">
      <h1 id="neckflix_label">NECKFLIX</h1>
      <HomePage inventory = {inventory} checkoutOrReturnFilmById={checkoutOrReturnFilmById}/>
      <hr />
      <footer>© 2023 Video Store</footer>
    </div>


  )

}
