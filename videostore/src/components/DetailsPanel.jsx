import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import key from '../data/keys.json'

export async function videoLoader({params}) {
    console.log(params, "<-- params here")
    const response = await axios.get(`https://www.omdbapi.com/?i=${params.videoId}&apikey=${key}`)
    console.log(response, "<-- response here")
    return response.data;
}


export default function DetailsPanel() {

    const videoData = useLoaderData();
    console.log(videoData)
    const { Title, Poster, Rated, Plot } = videoData

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
                    <button>Stream now</button>
                    <button><Link to='/'>Return home</Link></button>
                </div>
            </div>

            



        </div>
    )
}