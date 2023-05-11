import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// Server
import './server'

// Components
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
// Vans
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
// Host
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import UserVans from './pages/Host/HostVans/UserVans'
import UserVansDetails from './pages/Host/HostVans/UserVanDetail'
import UserVanInfo from './pages/Host/HostVans/UserVanInfo'
import UserVanPhotos from './pages/Host/HostVans/UserVanPhotos'
import UserVanPricing from './pages/Host/HostVans/UserVanPricing'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetail />} />

                    {/* Host */}
                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="vans" element={<UserVans />} />
                        <Route path="vans/:id" element={<UserVansDetails />}>
                            <Route index element={<UserVanInfo />} />
                            <Route path='pricing' element={<UserVanPricing />} />
                            <Route path='photos' element={<UserVanPhotos />} />
                        </Route>
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);