import React from 'react';
import { Link } from 'react-router-dom';
import './myBookingList.css';

const MyBookingList = ({ item }) => {
    return (
        <div className="searchItem">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">{item.kostName}</h1>
                <span className="siDistance">Booking ID</span>
                <span className="siTaxiOp">{item._id}</span>
                <span className="siFeatures">{item.kostCity}</span>
                <span className="siCancelOp">Free cancellation</span>
            </div>
            <div className="siDetails">
                <div className="siDetailTexts">
                    <span className="siPrice">Rp {item.kostPrice}</span>
                    <span className="siTaxOp">Include taxes and fees</span>
                </div>
            </div>
        </div>
    );
};

export default MyBookingList;
