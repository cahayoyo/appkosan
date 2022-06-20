import React from 'react';
import { useContext } from 'react';
import Header from '../../components/header/Header';
import MyBookingList from '../../components/myBookingList/MyBookingList';
import Navbar from '../../components/navbar/Navbar';
import { AuthContext } from '../../context/AuthContext';
import useFetch from '../../hooks/useFetch';
import './myBooking.css';

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const { data, loading } = useFetch(`/bookings/${user.username}`);

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="bookingResult">
                {loading ? (
                    'loading'
                ) : (
                    <>
                        {data.map((item) => (
                            <MyBookingList item={item} key={item._id} />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default MyBooking;
