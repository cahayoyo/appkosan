export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user',
        headerName: 'User',
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img
                        className="cellImg"
                        src={
                            params.row.img ||
                            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                        }
                        alt="avatar"
                    />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 230,
    },
    {
        field: 'country',
        headerName: 'Country',
        width: 100,
    },
    {
        field: 'city',
        headerName: 'City',
        width: 100,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 100,
    },
];

export const hotelColumns = [
    { field: '_id', headerName: 'ID', width: 250 },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 100,
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 100,
    },
    {
        field: 'city',
        headerName: 'City',
        width: 100,
    },
];

export const roomColumns = [
    { field: '_id', headerName: 'ID', width: 70 },
    {
        field: 'title',
        headerName: 'Title',
        width: 100,
    },
    {
        field: 'desc',
        headerName: 'Description',
        width: 100,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 100,
    },
    {
        field: 'maxPeople',
        headerName: 'Max People',
        width: 100,
    },
];

export const bookingColumns = [
    { field: '_id', headerName: 'ID', width: 70 },
    {
        field: 'username',
        headerName: 'Username',
        width: 100,
    },
    {
        field: 'hotelName',
        headerName: 'Hotel Name',
        width: 100,
    },
    {
        field: 'hotelCity',
        headerName: 'Hotel City',
        width: 100,
    },
    {
        field: 'roomTitle',
        headerName: 'Room Title',
        width: 100,
    },
    {
        field: 'roomNumber',
        headerName: 'Room Number',
        width: 100,
    },
    {
        field: 'hotelPrice',
        headerName: 'Hotel Price',
        width: 100,
    },
    {
        field: 'dateBooking',
        headerName: 'Date Booking',
        width: 100,
    },
];
