import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api";

export function loader() {
    return getHostVans()
}

export default function UserVans() {
    const vans = useLoaderData()

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
        <div className="host-van-container">
            <h1>Your listed vans</h1>
            <div className="host-van-container-list">
                {vanElements}
            </div>
        </div>
    )
}