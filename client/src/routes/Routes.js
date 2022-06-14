import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Kost from '../pages/kost/Kost';
import List from '../pages/list/List';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

const RoutesApp = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hotels" element={<List />} />
                    <Route path="/hotels/:id" element={<Kost />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default RoutesApp;
