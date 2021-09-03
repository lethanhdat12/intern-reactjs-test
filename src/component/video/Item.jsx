
const Item = (props) => {
    return (
        <div className="videoItem__box">
            <div className="videoItem__width videoItem__img">
                <img src={props.img} alt="" />
            </div>
            <div className="videoItem__width videoItem__content">
                <p className= {props.itemOdd  ? "videoItem__what t-oranger" : "videoItem__what"}>{props.what}</p>
                <p className= {props.itemOdd  ? "videoItem__title t-black" : "videoItem__title"}>{props.title}</p>
                <div className= {props.itemOdd  ? "videoItem__desc t-black" : "videoItem__desc"}>{props.desc}</div>
                <button className= {props.itemOdd  ? "btn btn-black btn-oranger" : "btn btn-black"}>시작하기</button>
            </div>
        </div>
    )
}

export default Item;