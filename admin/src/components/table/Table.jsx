import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetch from '../../hooks/useFetch';

const List = () => {
    const { data } = useFetch('/bookings?limit=5');

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Booking ID</TableCell>
                        <TableCell className="tableCell">Username</TableCell>
                        <TableCell className="tableCell">Kost Name</TableCell>
                        <TableCell className="tableCell">Kost City</TableCell>
                        <TableCell className="tableCell">Kost Price</TableCell>
                        <TableCell className="tableCell">Booking at</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item._id}>
                            <TableCell className="tableCell">
                                {item._id}
                            </TableCell>
                            <TableCell className="tableCell">
                                {item.username}
                            </TableCell>
                            <TableCell className="tableCell">
                                {item.hotelName}
                            </TableCell>
                            <TableCell className="tableCell">
                                {item.hotelCity}
                            </TableCell>
                            <TableCell className="tableCell">
                                {item.hotelPrice}
                            </TableCell>
                            <TableCell className="tableCell">
                                {item.createdAt}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;
