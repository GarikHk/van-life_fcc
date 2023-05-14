import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// Server
import './server'

// Components
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from './components/Error';
// Vans
import Vans, { loader } from './pages/Vans/Vans'
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
// NotFound
import NotFound from './pages/NotFound'

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route 
                    path="vans" 
                    element={<Vans />} 
                    errorElement={<Error />}
                    loader={loader}
                />
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

                <Route path="*" element={<NotFound />} />
            </Route>
        )
    )
    return <RouterProvider router={router} />
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);