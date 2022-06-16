import React from 'react';
import useFetch from '../../hooks/useFetch';
import './featuredproperties.css';

const formatRupiah = (angka) => {
    var number_string = angka.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }
};

const FeaturedProperties = () => {
    const { data, loading, error } = useFetch('/hotels?featured=true&limit=4');
    return (
        <div className="fp">
            {loading ? (
                'Loading'
            ) : (
                <>
                    {data.map((item) => (
                        <div className="fpItem" key={item._id}>
                            <img className="fpImg" src={item.photos[0]} />
                            <span className="fpName">{item.name}</span>
                            <span className="fpCity">{item.city}</span>
                            <span className="fpPrice">
                                Starting from Rp {item.cheapestPrice}
                            </span>
                            {item.rating && (
                                <div className="fpRating">
                                    <button>{item.rating}</button>
                                    <span>Excellent</span>
                                </div>
                            )}
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default FeaturedProperties;
