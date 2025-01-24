

function Card(props){
    return (
        <div className="card" style={{border:"2px solid black", padding:"2px"}}>
            <img src = {props.img}  height="200px" width="200px" />
            <div style={{textAlign:"center"}}>
                <h1>{props.cloth}</h1>
                <h2>${props.price}</h2>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}

export default Card;