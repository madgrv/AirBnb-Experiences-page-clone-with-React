import React from "react";


export default function Card(props) {

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
           {badgeText && <div className="card--badge">{badgeText}</div>}
           {/* {props.location === "Online" && <div className="card--badge">{badgeText}</div>} */}
            <div className="cardImage">
                <div className="statusBox"></div>
                <img src={props.item.coverImg} alt="experience image"></img>
            </div>
            <div className="caption">
                <div className="ratingContainer">
                    <p><span className="star">★</span><span className="rating"> {props.item.stats.rating}</span> ({props.item.stats.reviewCount}) · {props.item.location}</p>
                </div>
                <p className="description smaller">{props.item.title}</p>
                <div className="pricing">
                    <p className="description smaller"><span className="bold ">From ${props.item.price}</span>/ person</p>
                </div>
            </div>
        </div>
    )
}
