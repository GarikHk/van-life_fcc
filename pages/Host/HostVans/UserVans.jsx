import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserVans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <Link key={van.id} to={van.id}>
            <div className="van-item">
                <img src={van.imageUrl} />
                <div className="host-van">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link >
    ))

    return (
        <>
            {vans.length > 0 ? (
                <div className="host-van-container">
                    <h1>Your listed vans</h1>
                    <div className="host-van-container-list">
                        {vanElements}
                    </div>
                </div>
            ) : <h1 className="loading">Loading...</h1>}
        </>

    )
}