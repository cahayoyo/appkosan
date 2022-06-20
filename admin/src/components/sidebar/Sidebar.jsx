import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CottageIcon from '@mui/icons-material/Cottage';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Sidebar = () => {
    const { dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
    };

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className="logo">12 admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/kosts" style={{ textDecoration: 'none' }}>
                        <li>
                            <CottageIcon className="icon" />
                            <span>Kosts</span>
                        </li>
                    </Link>
                    <Link to="/rooms" style={{ textDecoration: 'none' }}>
                        <li>
                            <MeetingRoomIcon className="icon" />
                            <span>Rooms</span>
                        </li>
                    </Link>
                    <Link to="/bookings" style={{ textDecoration: 'none' }}>
                        <li>
                            <CreditCardIcon className="icon" />
                            <span>Bookings</span>
                        </li>
                    </Link>
                    <p className="title">ADMIN</p>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span onClick={logout}>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
