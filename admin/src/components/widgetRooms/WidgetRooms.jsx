import './widgetRooms.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import useFetch from '../../hooks/useFetch.js';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import { Link } from 'react-router-dom';

const WidgetRooms = () => {
    const { data, loading, error } = useFetch('rooms/count/rooms');
    console.log(data.count);

    return (
        <div className="widget">
            <div className="left">
                <span className="title">ROOMS</span>
                <span className="counter">{data.count}</span>
                <Link to="/rooms" style={{ textDecoration: 'none' }}>
                    <span className="link">See all rooms</span>
                </Link>
            </div>
            <div className="right">
                <div className="percentage positive"></div>
                <MeetingRoomOutlinedIcon
                    className="icon"
                    style={{
                        backgroundColor: 'rgba(0, 128, 0, 0.2)',
                        color: 'green',
                    }}
                />
            </div>
        </div>
    );
};

export default WidgetRooms;
