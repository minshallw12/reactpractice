export default function DetailsPanel({selected, checkoutOrReturnFilmById}) {
    console.log(selected)
    const { id, title, imgUrl, copiesAvailable, rating, description} = selected

    return(
        <div className="center">
            <div className="details_panel">
                <div className="poster">
                    <div className="center">
                        <h2>{title}</h2>
                    </div>
                    <div className="center">
                        <img id="selectedPoster"src={imgUrl} alt="" />
                    </div>
                </div>

                <div className="posterdescription">
                    <span>Rated {rating}</span>
                    <p className="description">{description}</p>
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