import Video from "./Video";
import inventory from "../data/inventory.json";
import key from '../data/keys.json';
import axios from 'axios';
import { useLoaderData } from "react-router-dom";


export async function inventoryLoader() {
    const promises = inventory.map(id => axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${key}`))
    const responses = await Promise.all(promises);
    const allVideoData = responses.map(response => response.data);
    return allVideoData;
}


export default function HomePage() {

    const allData = useLoaderData();
    console.log(allData);

    return (
        <div className="video">
             <div id='inventory_label'>
                <h2>Video Inventory</h2>
            </div>
                
            <div className="video_container">
                {
                    allData.map((videoData, index) => (
                        <Video
                            key={index}
                            data = {videoData}
                        />
                    ))
                }
            </div>
        </div>
    )

}