import Sidebar from '../../components/adminSidebar/Sidebar';
import Navbar from '../../components/adminNavbar/Navbar';
import './home.scss';
import Table from '../../components/adminTable/Table';
import WidgetBookings from '../../components/widgetBookings/WidgetBookings';
import WidgetRooms from '../../components/widgetRooms/WidgetRooms';
import WidgetUsers from '../../components/widgetUsers/WidgetUsers';
import WidgetKosts from '../../components/widgetKosts/WidgetKosts';

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <WidgetUsers />
                    <WidgetKosts />
                    <WidgetRooms />
                    <WidgetBookings />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Bookings</div>
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default Home;
