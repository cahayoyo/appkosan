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
                    <span className="logo">MLSI BOOKING</span>
                </Link>

                {user ? (
                    <div className="navItems">
                        <img className="cellImg" src={user.img} alt="avatar" />
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
