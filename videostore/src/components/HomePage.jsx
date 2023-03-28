import { useState } from "react"
import Video from "./Video"
import DetailsPanel from "./DetailsPanel"

export default function HomePage({inventory, checkoutOrReturnFilmById}) {
    const [selectedFilm, setSelectedFilm] = useState(null)

    const setSelectedFilmById = (id) => {
        const match = inventory.find((item)=> item.id === id);
        if (match) {
            setSelectedFilm(match)
        } else {
            setSelectedFilm(null)
        }
    }
  
    console.log(selectedFilm)

    return (
        <div>


            <div className="video">
                <div id='inventory_label'>
                    <h2>Video Inventory</h2>
                </div>
                
                <div className="video_container">
                    {
                        inventory.map(props => (
                            <Video key={props.id}
                            setSelectedFilmById = {setSelectedFilmById}
                            {...props}/>
                        ))
                    }
                </div>
            </div>
            <hr />
            { selectedFilm && <DetailsPanel selected = {selectedFilm} checkoutOrReturnFilmById={checkoutOrReturnFilmById} /> }


        </div>
    )

}