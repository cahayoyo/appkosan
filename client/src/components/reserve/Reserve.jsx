import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext';
import './reserve.css';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const Reserve = ({ setOpen, hotelId, hotelName, hotelCity, hotelPrice }) => {
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [booking, setBooking] = useState({});
    const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
    const { dates } = useContext(SearchContext);
    const { user } = useContext(AuthContext);

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const date = new Date(start.getTime());

        let list = [];

        while (date <= end) {
            list.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return list;
    };

    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    console.log(alldates);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
            alldates.includes(new Date(date).getTime())
        );

        return !isFound;
    };

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
            checked
                ? [...selectedRooms, value]
                : selectedRooms.filter((item) => item !== value)
        );
    };

    const navigate = useNavigate();

    const newBooking = {
        username: user.username,
        hotelName: hotelName,
        hotelCity: hotelCity,
        roomTitle: 'roomTitle',
        roomNumber: selectedRooms,
        hotelPrice: hotelPrice,
        dateBooking: alldates,
    };

    console.log(selectedRooms);

    const handleClick = async () => {
        await axios.post('/bookings', newBooking);
        try {
            await Promise.all(
                selectedRooms.map((roomId) => {
                    const res = axios.put(`/rooms/availability/${roomId}`, {
                        dates: alldates,
                    });
                    return res.data;
                })
            );
            setOpen(false);
            navigate('/');
        } catch (err) {}
    };

    // console.log(newBooking);

    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="rClose"
                    onClick={() => setOpen(false)}
                />
                <span>Select your rooms:</span>
                {data.map((item) => (
                    <div className="rItem" key={item._id}>
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">
                                Max people: <b>{item.maxPeople}</b>
                            </div>
                            <div className="rPrice">{item.price}</div>
                        </div>
                        <div className="rSelectRooms">
                            {item.roomNumbers.map((roomNumber) => (
                                <div className="room">
                                    <label>{roomNumber.number}</label>
                                    <input
                                        type="checkbox"
                                        value={roomNumber._id}
                                        onChange={handleSelect}
                                        disabled={!isAvailable(roomNumber)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={handleClick} className="rButton">
                    Reserve Now!
                </button>
            </div>
        </div>
    );
};

export default Reserve;
