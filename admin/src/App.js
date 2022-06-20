import Home from './pages/adminHome/Home';
import Login from './pages/adminLogin/Login';
import List from './pages/adminList/List';
import Single from './pages/single/Single';
import New from './pages/adminNew/New';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { userInputs } from './formSource';
import './style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';
import {
    bookingColumns,
    hotelColumns,
    roomColumns,
    userColumns,
} from './datatablesource';
import NewKost from './pages/adminNewKost/NewKost';
import NewRoom from './pages/adminNewRoom/NewRoom';

function App() {
    const { darkMode } = useContext(DarkModeContext);

    const ProtectedRoute = ({ children }) => {
        const { user } = useContext(AuthContext);

        if (!user) {
            return <Navigate to="/login" />;
        }

        return children;
    };

    return (
        <div className={darkMode ? 'app dark' : 'app'}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="login" element={<Login />} />
                        <Route
                            index
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="users">
                            <Route
                                index
                                element={
                                    <ProtectedRoute>
                                        <List columns={userColumns} />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path=":userId"
                                element={
                                    <ProtectedRoute>
                                        <Single />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="new"
                                element={
                                    <ProtectedRoute>
                                        <New
                                            inputs={userInputs}
                                            title="Add New User"
                                        />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>
                        <Route path="kosts">
                            <Route
                                index
                                element={
                                    <ProtectedRoute>
                                        <List columns={hotelColumns} />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path=":productId"
                                element={
                                    <ProtectedRoute>
                                        <Single />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="new"
                                element={
                                    <ProtectedRoute>
                                        <NewKost />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>
                        <Route path="rooms">
                            <Route
                                index
                                element={
                                    <ProtectedRoute>
                                        <List columns={roomColumns} />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path=":productId"
                                element={
                                    <ProtectedRoute>
                                        <Single />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="new"
                                element={
                                    <ProtectedRoute>
                                        <NewRoom />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>
                        <Route path="bookings">
                            <Route
                                index
                                element={
                                    <ProtectedRoute>
                                        <List columns={bookingColumns} />
                                    </ProtectedRoute>
                                }
                            ></Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
