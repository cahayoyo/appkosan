import React from 'react';
import useFetch from '../../hooks/useFetch';
import './propertylist.css';

const PropertyList = () => {
    const { data, loading, error } = useFetch('/hotels/countByUniversity');

    const images = [
        'https://img.okezone.com/content/2020/05/06/65/2209839/ventilator-karya-universitas-gunadarma-dirancang-untuk-siap-diproduksi-secara-massal-KvK9qtj8SZ.jpg',
        'https://cdn-2.tstatic.net/tribunnews/foto/bank/images/Rektorat-UI.jpg',
        'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1497342187/anfuvbxmvaxw5irs94qu.jpg',
        'https://kampusaja.com/wp-content/uploads/2016/12/2_profil-kampus-UNPAD-bandung.jpg',
        'https://www.goodnewsfromindonesia.id/uploads/images/2020/12/1911322020-Goodnewsfromindonesia-GNFI-ugm-gedungpusat2.jpg',
    ];

    return (
        <div className="pList">
            {loading ? (
                'loading'
            ) : (
                <>
                    {data &&
                        images.map((img, i) => (
                            <div className="pListItem" key={i}>
                                <img className="pListImg" src={img} />
                                <div className="pListTitle">
                                    <h1>{data[i]?.university}</h1>
                                    <h2>{data[i]?.count} Kost</h2>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </div>
    );
};

export default PropertyList;
