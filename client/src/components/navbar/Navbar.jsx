import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    };

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link
                    to="/"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                >
                    <span className="logo">12BOOKING</span>
                </Link>

                {user ? (
                    <div className="navItems">
                        <Link to="/mybooking">
                            <img
                                className="cellImg"
                                src={
                                    user.img ||
                                    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                                }
                                alt="avatar"
                            />
                        </Link>
                        <div>{user.username}</div>
                        <div>
                            <button onClick={logout} className="logoutButton">
                                Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="navItems">
                        <Link to="/register">
                            <button className="navButton">Register</button>
                        </Link>
                        <Link to="/login">
                            <button className="navButton">Login</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
