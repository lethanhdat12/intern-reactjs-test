import './Banner2.scss'

const Banner2 = (props)=>{
    return (
       <div className="banner2" style={{backgroundImage : `url("./access/img/`+ props.img +`")`}}>
           <div className="container">
                <div className="banner2__content" >
                    <h3 className="banner2__title">{props.title}</h3>
                    <p className="banner__desc">{props.desc}</p>
                    {
                        props.button &&  <button className="btn btn-white"> {props.button} </button>
                    }
                </div>
           </div>
       </div>
    )
}

export default Banner2;