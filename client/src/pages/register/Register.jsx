import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './register.css';

const Register = () => {
    const [info, setInfo] = useState({});

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const { loading } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const newUser = {
                ...info,
            };
            await axios.post('/auth/register', newUser);
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="login">
            <div className="lContainer">
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="text"
                    placeholder="email"
                    id="email"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="text"
                    placeholder="country"
                    id="country"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="text"
                    placeholder="img"
                    id="img"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="text"
                    placeholder="city"
                    id="city"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="text"
                    placeholder="phone"
                    id="phone"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="lInput"
                />
                <button onClick={handleClick} className="lButton">
                    Register
                </button>
                <div className="button">
                    <Link to="/">
                        <button disabled={loading} className="lButton">
                            Home
                        </button>
                    </Link>
                    <Link to="/login">
                        <button disabled={loading} className="lButton">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
