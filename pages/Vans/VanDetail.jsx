import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function VanDetail() {
    const [van, setVan] = useState(null)
    const vanid = useParams().id

    useEffect(() => {
        fetch(`/api/vans/${vanid}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [vanid])

    return (
        <div>
            {van ? (
                <div className="van-page">
                    {/* <Link to="/vans">Back to all vans</Link> */}
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h3>{van.name}</h3>
                    <p><b>${van.price}</b>/day</p>
                    <p>{van.description}</p>
                    <button>Rent This Van</button>
                </div>
            ) : <h1>Loading...</h1>}
        </div>

    )
}