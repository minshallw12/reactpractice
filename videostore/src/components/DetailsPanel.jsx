export default function DetailsPanel({selected, checkoutOrReturnFilmById}) {
    const { id, Title, Poster, copiesAvailable, Rated, Plot} = selected

    return(
        <div className="center">
            <div className="details_panel">
                <div className="poster">
                    <div className="center">
                        <h2>{Title}</h2>
                    </div>
                    <div className="center">
                        <img id="selectedPoster"src={Poster} alt="" />
                    </div>
                </div>

                <div className="posterdescription">
                    <span>Rated     {Rated}</span>
                    <p className="description">{Plot}</p>
                    <div className="center buttondiv">
                        <span>Copies Available: {copiesAvailable.current} / {copiesAvailable.total}</span>
                        
                        <div className="button_container">
                            <button 
                                disabled={copiesAvailable.current === 0}
                                onClick={() => checkoutOrReturnFilmById(id, 'checkout')}
                            >Rent movie</button>
                            <button 
                                disabled={copiesAvailable.current === copiesAvailable.total} 
                                onClick={() => checkoutOrReturnFilmById(id, 'return')}
                            >Return movie</button>
                        </div>
                        
                    </div>

            </div>
        </div>

            



        </div>
    )
}