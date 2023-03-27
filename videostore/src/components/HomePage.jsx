import Video from "./Video"

export default function HomePage(props) {

    return (
        <div className="video">
            <div id='inventory_label'>
                <h2>Video Inventory</h2>
            </div>
            
            <div className="video_container">
                {
                    props.inventory.map(props => <Video {...props}/>)
                }
            </div>
            <h1>{props.title}</h1>

        </div>
    )

}