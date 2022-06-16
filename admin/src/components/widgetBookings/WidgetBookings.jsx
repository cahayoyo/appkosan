import './widgetBookings.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import useFetch from '../../hooks/useFetch.js';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import { Link } from 'react-router-dom';

const WidgetBookings = () => {
    const { data, loading, error } = useFetch('bookings/count/bookings');
    console.log(data.count);

    return (
        <div className="widget">
            <div className="left">
                <span className="title">BOOKINGS</span>
                <span className="counter">{data.count}</span>
                <Link to="/bookings" style={{ textDecoration: 'none' }}>
                    <span className="link">See all bookings</span>
                </Link>
            </div>
            <div className="right">
                <div className="percentage positive"></div>
                <BookmarkAddedOutlinedIcon
                    className="icon"
                    style={{
                        backgroundColor: 'rgba(128, 0, 128, 0.2)',
                        color: 'purple',
                    }}
                />
            </div>
        </div>
    );
};

export default WidgetBookings;
