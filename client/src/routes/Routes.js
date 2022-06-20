import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Kost from '../pages/kost/Kost';
import List from '../pages/list/List';
import Login from '../pages/login/Login';
import MyBooking from '../pages/myBooking/MyBooking';
import Register from '../pages/register/Register';

const RoutesApp = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/kosts" element={<List />} />
                    <Route path="/kosts/:id" element={<Kost />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/myBooking" element={<MyBooking />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default RoutesApp;
