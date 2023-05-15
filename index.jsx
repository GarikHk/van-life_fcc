import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// Server
import './server'
// Utils
import { requireAuth } from "./utils"

// Components
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from './components/Error';
// Vans
import Vans, { loader as vansLoader } from './pages/Vans/Vans'
import VanDetail, { loader as vanDetailLoader } from './pages/Vans/VanDetail'
// Host
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import UserVans, { loader as hostVansLoader } from './pages/Host/HostVans/UserVans'
import UserVansDetails, { loader as hostVanDetailLoader } from './pages/Host/HostVans/UserVanDetail'
import UserVanInfo from './pages/Host/HostVans/UserVanInfo'
import UserVanPhotos from './pages/Host/HostVans/UserVanPhotos'
import UserVanPricing from './pages/Host/HostVans/UserVanPricing'
// Login
import Login, { loader as loginLoader } from './pages/Login';
// NotFound
import NotFound from './pages/NotFound'

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route
                    path="login"
                    element={<Login />}
                    loader={loginLoader}
                />
                <Route
                    path="vans"
                    element={<Vans />}
                    errorElement={<Error />}
                    loader={vansLoader}
                />
                <Route
                    path="vans/:id"
                    element={<VanDetail />}
                    loader={vanDetailLoader}
                />

                {/* Host */}
                <Route
                    path="host"
                    element={<HostLayout />}
                    loader={async () => await requireAuth()}
                >
                    <Route index element={<Dashboard />} />
                    <Route path="income" element={<Income />} />
                    <Route
                        path="vans"
                        element={<UserVans />}
                        loader={hostVansLoader}
                    />
                    <Route
                        path="vans/:id"
                        element={<UserVansDetails />}
                        loader={hostVanDetailLoader}
                    >
                        <Route index element={<UserVanInfo />} />
                        <Route path='pricing' element={<UserVanPricing />} />
                        <Route path='photos' element={<UserVanPhotos />} />
                    </Route>
                    <Route path="reviews" element={<Reviews />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Route>
        )
    )
    return <RouterProvider router={router} />
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);