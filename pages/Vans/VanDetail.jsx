import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VanDetail() {
    const [van, setVan] = useState(null)
    const vanid = useParams().id
    const location = useLocation()
    const search = location.state?.search || ""

    useEffect(() => {
        fetch(`/api/vans/${vanid}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [vanid])

    return (
        <div>
            <Link
                to={`..?${search}`}
                relative="path"
                className="back-button pub"
            >&larr; <span>Back to {search ? search.match(/=(.*)/)[1] : "all"} vans</span></Link>

            {van ? (
                <div className="van-page">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h3>{van.name}</h3>
                    <p><b>${van.price}</b>/day</p>
                    <p>{van.description}</p>
                    <button>Rent This Van</button>
                </div>
            ) : <h1 className="loading">Loading...</h1>}
        </div>

    )
}