import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import orginventory from './data/newdata.json'
import axios from 'axios'

export default function App() {

  const [inventory, setInventory] = useState(orginventory);
  const [selectedFilm, setSelectedFilm] = useState(null)

  const setSelectedFilmById = (id) => {
      const match = inventory.find((item)=> item.id === id);
      if (match) {
          setSelectedFilm(match)
      } else {
          setSelectedFilm(null)
      }
  }


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

    // const updateInventoryById = (id, newobj) => {
    //   const newInventory = [...inventory];
    //   const filmToAdd = newInventory.find(title => title.id ===  id);
    //   Object.assign(filmToAdd, newobj);
    //   setInventory(newInventory)
    // }
    const updateInventoryById = (id, updateObj) => {
      const newInventory = [...inventory];
      const filmToUpdate = newInventory.find(film => film.id === id);
      Object.assign(filmToUpdate, updateObj);
      setInventory(newInventory);
    }
    useEffect(() => {
      const apiKey = "7f539340";
      console.log(inventory.length)
      for (let i=0; i<inventory.length; i++) {
        let item = inventory[i];
        console.log(item)
        const url = `https://www.omdbapi.com/?i=${item.id}&apikey=${apiKey}`
        axios.get(url)
        .then(response =>{
          updateInventoryById(item.id, response.data)
          console.log(response.data)
        })
        .catch(err => console.error(err))
      }
    }, []
    );

  return  (

    <div className="app_container">
      <h1 id="neckflix_label">NECKFLIX</h1>
      <HomePage 
        inventory = {inventory} 
        checkoutOrReturnFilmById={checkoutOrReturnFilmById} 
        selectedFilm={selectedFilm} 
        setSelectedFilmById={setSelectedFilmById}
      />
      <hr />
      <footer className='center'><div>Copyright© 2023 Neckflix</div></footer>
    </div>


  )

}
