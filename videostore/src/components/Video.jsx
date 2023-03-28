export default function Video({
    id,
    title,
    imgUrl, 
    copiesAvailable,
    setSelectedFilmById,
    rating, 
    description}) {

    const clickHandler = () => {
        alert("hello")
    }

    return (
        <div className="video_item">
            <div className='center'>
                <h3>{title}</h3>
            </div>
            
            <img src={imgUrl} alt="" onClick={()=> setSelectedFilmById(id)}/>
            <div className="summary">
                <div className="center"><p>Rated: {rating}</p></div>
            </div>
        </div>
        
    )

}