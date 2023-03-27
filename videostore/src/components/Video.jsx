export default function Video(props) {

    const clickHandler = () => {
        alert("hello")
    }

    return (
        <div className="video_item">
            <div className='center'>
                <h3>{props.title}</h3>
            </div>
            
            <img src={props.imgUrl} alt="" />
            <div>
                Copies Available: {props.copiesAvailable}
                <button 
                    onClick={clickHandler} 
                    disabled={props.copiesAvailable===0}
                    >Checkout</button>
            </div>
        </div>
    )

}