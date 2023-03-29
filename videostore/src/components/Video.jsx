export default function Video({
    id,
    title,
    imgUrl, 
    setSelectedFilmById,
    rating, 
    description}) {

    return (
        <div className="video_item" onClick={()=> setSelectedFilmById(id)}>

            <div className='center'>
                <h3>{title}</h3>
            </div>

            <img src={imgUrl} alt="" />

            <div className="summary">
                <div className="center"><p>Rated: {rating}</p></div>
            </div>
            
        </div>
        
    )

}