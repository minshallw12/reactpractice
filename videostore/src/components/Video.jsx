import { useNavigate } from "react-router-dom";

export default function Video(props) {
    // console.log(props.data.imdbID)
    const navigate = useNavigate();
    // console.log(props.data.imdbId)
    return (
        <div className="video_item" onClick={()=> navigate(`/video/${props.data.imdbID}`)}>

            <div className='center'>
                <h3>{props.data.Title}</h3>
            </div>

            <img src={props.data.Poster} alt="" />

            <div className="summary">
                <div className="center"><p>Rated: {props.data.Rated}</p></div>
            </div>
            
        </div>
        
    )

}