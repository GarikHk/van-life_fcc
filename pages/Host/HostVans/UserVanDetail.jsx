import React from "react";
import { NavLink, Outlet, Link, useLoaderData } from "react-router-dom";
import { getVan } from "../../../api";

export function loader({ params }) {
    return getVan(params.id)
}

export default function UserVanDetail() {
    const van = useLoaderData()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <div>
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
        </div>
    )
}