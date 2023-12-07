import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { SpeedDial, SpeedDialIcon } from '@mui/material';

const columns = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'language_id', label: 'Language', minWidth: 100 },
    {
        id: 'key_name',
        label: 'Key Name',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'key_value',
        label: 'Key Value',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    // {
    //     id: 'IsActive',
    //     label: 'Is Active',
    //     minWidth: 170,
    //     align: 'right',
    //     format: (value) => value,
    // },
];

function createData(id, language_id, key_name, key_value) {
    return { id, language_id, key_name, key_value };
}

const rows = [
    createData(1, 'Shqip_id_1', 'SQ', 'perkthimKey', 'perkthimi'),
    createData(2, 'Shqip_id_1', 'SQ', 'perkthisadmKey', 'perkthimi'),
    createData(3, 'Shqip_id_1', 'SQ', 'perkthimasdKey', 'perkthimi'),
    createData(4, 'Shqip_id_1', 'SQ', 'perkthisdmKey', 'perkthimi'),
    createData(5, 'Shqip_id_1', 'SQ', 'perkthimadsKey', 'perkthimi'),
    createData(6, 'Shqip_id_1', 'SQ', 'perkthimKey', 'perkthimi'),
    createData(7, 'Shqip_id_1', 'SQ', 'perkthiwmKey', 'perkthimi'),
    createData(8, 'Shqip_id_1', 'SQ', 'perkthiwmKey', 'perkthimi'),
    createData(9, 'Shqip_id_1', 'SQ', 'perkthimaKey', 'perkthimi'),
    createData(0, 'Shqip_id_1', 'SQ', 'peasdrkthimKey', 'perkthimi'),
    createData(2, 'Shqip_id_1', 'SQ', 'perkthisadmKey', 'perkthimi'),
    createData(3, 'Shqip_id_1', 'SQ', 'perkthimasdKey', 'perkthimi'),
    createData(4, 'Shqip_id_1', 'SQ', 'perkthisdmKey', 'perkthimi'),
    createData(5, 'Shqip_id_1', 'SQ', 'perkthimadsKey', 'perkthimi'),
    createData(6, 'Shqip_id_1', 'SQ', 'perkthimKey', 'perkthimi'),
    createData(7, 'Shqip_id_1', 'SQ', 'perkthiwmKey', 'perkthimi'),
    createData(8, 'Shqip_id_1', 'SQ', 'perkthiwmKey', 'perkthimi'),
    createData(9, 'Shqip_id_1', 'SQ', 'perkthimaKey', 'perkthimi'),
    createData(0, 'Shqip_id_1', 'SQ', 'peasdrkthimKey', 'perkthimi'),
    createData(2, 'Shqip_id_1', 'SQ', 'perkthisadmKey', 'perkthimi'),
    createData(3, 'Shqip_id_1', 'SQ', 'perkthimasdKey', 'perkthimi'),
    createData(4, 'Shqip_id_1', 'SQ', 'perkthisdmKey', 'perkthimi'),
    createData(5, 'Shqip_id_1', 'SQ', 'perkthimadsKey', 'perkthimi'),
    createData(6, 'Shqip_id_1', 'SQ', 'perkthimKey', 'perkthimi'),
    createData(7, 'Shqip_id_1', 'SQ', 'perkthiwmKey', 'perkthimi'),
    createData(8, 'Shqip_id_1', 'SQ', 'perkthiwmKey', 'perkthimi'),
    createData(9, 'Shqip_id_1', 'SQ', 'perkthimaKey', 'perkthimi'),
    createData(0, 'Shqip_id_1', 'SQ', 'peasdrkthimKey', 'perkthimi'),
];

function Labels() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            console.log('value', value)
                                            if (value == 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/357px-Flag_of_Albania.svg.png') {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <img src={value} alt="" style={{ width: '50px' }} />
                                                    </TableCell>
                                                )
                                            }
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
            <SpeedDial
                ariaLabel="SpeedDial openIcon example"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClick={() => setOpenModal(!openModal)}
            />
            </>
    );
}
export default Labels