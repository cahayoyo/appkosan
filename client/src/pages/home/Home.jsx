import Featured from '../../components/featured/Featured';
import FeaturedProperties from '../../components/featuredproperties/FeaturedProperties';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/maillist/MailList';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertyList/PropertyList';
import './home.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by nearest university</h1>
                <PropertyList />
                <h1 className="homeTitle">Kost students love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
