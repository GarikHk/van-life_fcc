import React, { useEffect, useState } from "react";
import { useParams, NavLink, Outlet, Link } from "react-router-dom";

export default function UserVanDetail() {
    const [van, setVan] = useState(null)
    const vanid = useParams().id

    useEffect(() => {
        fetch(`/api/host/vans/${vanid}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [vanid])

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <div>
            {van ? (
                <section>
                    <Link
                        to=".."
                        relative="path"
                        className="back-button"
                    ><b>&larr;</b> <span>Back to all vans</span></Link>
                    <div className="host-van-page">
                        <div className="host-van-display">
                            <img src={van.imageUrl} />
                            <div className="host-van-name">
                                <i className={`host-van-type ${van.type} selected`}>{van.type}</i>
                                <h3>{van.name}</h3>
                                <p><b>${van.price}</b>/day</p>
                            </div>
                        </div>
                        <nav className="host-van-nav">
                            <NavLink
                                to="."
                                end
                                style={({ isActive }) => isActive ? activeStyles : null}
                            >
                                Details
                            </NavLink>
                            <NavLink
                                to="pricing"
                                style={({ isActive }) => isActive ? activeStyles : null}
                            >
                                Pricing
                            </NavLink>
                            <NavLink
                                to="photos"
                                style={({ isActive }) => isActive ? activeStyles : null}
                            >
                                Photos
                            </NavLink>
                        </nav>
                        <Outlet context={{ van }} />
                    </div>
                </section>
            ) : <h1 className="loading">Loading...</h1>}
        </div>
    )
}