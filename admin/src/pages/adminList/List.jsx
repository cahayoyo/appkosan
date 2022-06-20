import './list.scss';
import Sidebar from '../../components/adminSidebar/Sidebar';
import Navbar from '../../components/adminNavbar/Navbar';
import Datatable from '../../components/adminDataTable/Datatable';

const List = ({ columns }) => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatable columns={columns} />
            </div>
        </div>
    );
};

export default List;
