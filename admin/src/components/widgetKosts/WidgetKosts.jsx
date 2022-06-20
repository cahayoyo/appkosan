import './widgetKosts.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import useFetch from '../../hooks/useFetch.js';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import { Link } from 'react-router-dom';

const WidgetKosts = () => {
    const { data, loading, error } = useFetch('kosts/count/kosts');
    console.log(data.count);

    return (
        <div className="widget">
            <div className="left">
                <span className="title">KOSTS</span>
                <span className="counter">{data.count}</span>
                <Link to="/hotels" style={{ textDecoration: 'none' }}>
                    <span className="link">See all kosts</span>
                </Link>
            </div>
            <div className="right">
                <div className="percentage positive"></div>
                <HouseOutlinedIcon
                    className="icon"
                    style={{
                        backgroundColor: 'rgba(218, 165, 32, 0.2)',
                        color: 'goldenrod',
                    }}
                />
            </div>
        </div>
    );
};

export default WidgetKosts;
