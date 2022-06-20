import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';
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
