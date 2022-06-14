import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
    const { data, loading, error } = useFetch(
        "/hotels/countByCity?cities=depok,bogor,jakarta"
    );

    return (
        <div className="featured">
            {loading ? (
                "Loading please wait"
            ) : (
                <>
                    <div className="featuredItem">
                        <img
                            className="featuredImg"
                            src="https://cdn-cms.pgimgs.com/areainsider/2017/05/tugu-selamat-datang-depok_300x225_acf_cropped592d333f20ac7-300x225.jpg"
                        />
                        <div className="featuredTitles">
                            <h1>Depok</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img
                            className="featuredImg"
                            src="https://statik.tempo.co/data/2020/04/14/id_930766/930766_720.jpg"
                        />
                        <div className="featuredTitles">
                            <h1>Bogor</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img
                            className="featuredImg"
                            src="https://cdn.britannica.com/86/132686-050-1E541A27/Monas-Jakarta-Indonesia-background-government-buildings-Istiqlal.jpg"
                        />
                        <div className="featuredTitles">
                            <h1>Jakarta</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>{" "}
                </>
            )}
        </div>
    );
};

export default Featured;
