export default function DetailsPanel({selected}) {
    console.log(selected)


    return(
        <div className="center">
            <div className="details_panel">
                <div className="poster">
                    <div className="center">
                        <h2>{selected.title}</h2>
                    </div>
                    <div className="center">
                        <img id="selectedPoster"src={selected.imgUrl} alt="" />
                    </div>
                </div>

                <div className="posterdescription">
                    <span>Rated {selected.rating}</span>
                    <p className="description">{selected.description}</p>
                    <div className="center buttondiv">
                        <span>Copies Available: {selected.copiesAvailable.current}</span>
                        <button >Rent movie</button>
                    </div>

            </div>
        </div>

            



        </div>
    )
}