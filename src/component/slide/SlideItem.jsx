
const SlideItem = (props) => {
    return (
        <div className="slide__item">
            <p className="slide__item--title">{props.children}</p>
            <img src={props.img} alt="" className="slide__item--img" />
        </div>
    )
}

export default SlideItem;