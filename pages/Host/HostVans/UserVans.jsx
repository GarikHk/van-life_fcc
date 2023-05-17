import React, { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../../api";

export function loader() {
    return defer({ vans: getHostVans() })
}

export default function UserVans() {
    const dataPromise = useLoaderData()

    function resolvedVans(vans) {
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
        return vanElements
    }

    return (
        <div className="host-van-container">
            <h1>Your listed vans</h1>
            <div className="host-van-container-list">
                <Suspense fallback={<h3 className="loading">Loading...</h3>}>
                    <Await resolve={dataPromise.vans}>
                        {resolvedVans}
                    </Await>
                </Suspense>
            </div>
        </div>
    )
}