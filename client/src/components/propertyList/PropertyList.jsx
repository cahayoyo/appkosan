import React from "react";
import useFetch from "../../hooks/useFetch";
import "./propertylist.css";

const PropertyList = () => {
    const { data, loading, error } = useFetch("/hotels/countByType");

    const images = [
        "https://img.okezone.com/content/2021/03/20/406/2381202/5-hotel-di-tangerang-harganya-di-bawah-rp100-ribu-FdFIttej5V.jpg",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/72282092.jpg?k=5eeba7eb191652ce0c0988b4c7c042f1165b7064d865b096bb48b8c48bf191b9&o=&hp=1",
        "https://img.theculturetrip.com/450x/smart/wp-content/uploads/2020/12/73786c25.jpg",
        "https://images.squarespace-cdn.com/content/v1/585562bcbe659442d503893f/c3b765c0-45e3-46b3-9ff9-b4101fb30674/01.+Exotik+Villas+Bali+-+Aloui.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-s/13/91/4b/da/the-quats-temple-bar.jpg",
    ];

    return (
        <div className="pList">
            {loading ? (
                "loading"
            ) : (
                <>
                    {data &&
                        images.map((img, i) => (
                            <div className="pListItem" key={i}>
                                <img className="pListImg" src={img} />
                                <div className="pListTitle">
                                    <h1>{data[i]?.type}</h1>
                                    <h2>
                                        {data[i]?.count} {data[i]?.type}
                                    </h2>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </div>
    );
};

export default PropertyList;
