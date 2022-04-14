import React from "react"



export default function Card(props){
    return(
        <div className="card--container">
            <img src={`../images/${props.item.imageUrl}`} className="card--img"></img>
                <section className="card--info">
                    <section className="location--info">
                        <img className="dot-img" src="../images/dot.png"></img>
                        <div className="card--location">{props.item.location}</div>
                        <div>
                        <a className="google-maps" target="_blank" href="{props.item.googleMapsUrl}">View on Google Maps</a>
                        </div>
                    </section>
                    <div className="card--title">
                        <h3>{props.item.title}</h3>
                    </div>
                    <div className="card--dates">{props.item.startDate}-{props.item.endDate}</div>
                    <div className="card--description">{props.item.description}</div>
                </section>
        </div>
    );
}