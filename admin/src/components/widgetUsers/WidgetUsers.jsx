import './widgetUsers.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import useFetch from '../../hooks/useFetch.js';
import { Link } from 'react-router-dom';

const WidgetUsers = () => {
    const { data, loading, error } = useFetch('users/count/users');
    console.log(data.count);

    return (
        <div className="widget">
            <div className="left">
                <span className="title">USERS</span>
                <span className="counter">{data.count}</span>
                <Link to="/users" style={{ textDecoration: 'none' }}>
                    <span className="link">See all users</span>
                </Link>
            </div>
            <div className="right">
                <div className="percentage positive"></div>
                <PersonOutlinedIcon
                    className="icon"
                    style={{
                        color: 'crimson',
                        backgroundColor: 'rgba(255, 0, 0, 0.2)',
                    }}
                />
            </div>
        </div>
    );
};

export default WidgetUsers;
