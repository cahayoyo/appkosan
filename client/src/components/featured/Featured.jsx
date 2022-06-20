import React from 'react';
import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {
    const { data, loading } = useFetch(
        '/kosts/countByCity?cities=depok,bandung,yogyakarta'
    );

    return (
        <div className="featured">
            {loading ? (
                'Loading please wait'
            ) : (
                <>
                    <div className="featuredItem">
                        <img
                            className="featuredImg"
                            src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/10/18/666287160.jpg"
                        />
                        <div className="featuredTitles">
                            <h1>Depok</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img
                            className="featuredImg"
                            src="http://proleevo.com/wp-content/uploads/2015/01/alun-alun-kota-bandung-malam-hari-03.jpg"
                        />
                        <div className="featuredTitles">
                            <h1>Bandung</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img
                            className="featuredImg"
                            src="https://asset.kompas.com/crops/8GX0CBJ2-tDsMtpgq6TCN0WWPtI=/0x0:0x0/750x500/data/photo/2020/06/11/5ee208425be9b.jpg"
                        />
                        <div className="featuredTitles">
                            <h1>Yogyakarta</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>{' '}
                </>
            )}
        </div>
    );
};

export default Featured;
