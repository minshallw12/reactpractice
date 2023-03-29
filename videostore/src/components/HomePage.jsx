import Video from "./Video"
import DetailsPanel from "./DetailsPanel"

export default function HomePage({inventory, checkoutOrReturnFilmById, setSelectedFilmById, selectedFilm}) {

    return (
        <div>
            <div className="video">
                <div id='inventory_label'>
                    <h2>Video Inventory</h2>
                </div>
                
                <div className="video_container">
                    {
                        inventory.map(({ id, Title, Poster, copiesAvailable }) => (
                            <Video
                                key={id}
                                id={id}
                                title={Title}
                                imgUrl={Poster}
                                copiesAvailable={copiesAvailable}
                                setSelectedFilmById={setSelectedFilmById}
                            />
                        ))
                    }
                </div>
            </div>
            <hr />
            { selectedFilm && (
                <DetailsPanel 
                    selected = {selectedFilm} 
                    checkoutOrReturnFilmById={checkoutOrReturnFilmById} 
                />) }


        </div>
    )

}