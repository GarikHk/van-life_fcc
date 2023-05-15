import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader({ params }) {
    return getVans(params.id)
}

export default function VanDetail() {
    const van = useLoaderData()
    const location = useLocation()
    const search = location.state?.search || ""

    return (
        <div>
            <Link
                to={`..?${search}`}
                relative="path"
                className="back-button pub"
            >&larr; <span>Back to {search ? search.match(/=(.*)/)[1] : "all"} vans</span></Link>

            <div className="van-page">
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h3>{van.name}</h3>
                <p><b>${van.price}</b>/day</p>
                <p>{van.description}</p>
                <button>Rent This Van</button>
            </div>
        </div>

    )
}