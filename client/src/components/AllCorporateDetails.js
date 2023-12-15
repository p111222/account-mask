import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeRequest } from '../axios';

const AllCorporateDetails = () => {
    const [allCorporateDetails, setAllCorporateDetails] = useState([]);
    useEffect(() => {
        makeRequest.get('corporate/userdetails')
            .then((res) => {
                setAllCorporateDetails(res.data)
            })
    }, [])
    return (
        <>
            <div className="container mt-5">
                <h2 className='text-center mb-4'>All Corporate details</h2>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Corporate ID</TableCell>
                                <TableCell align="left">Corporate Name</TableCell>
                                <TableCell align="left">Actual Account Number</TableCell>
                                <TableCell align="left">Virtual Account Number</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allCorporateDetails && allCorporateDetails.map(row => (
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{row.corporateid}</TableCell>
                                    <TableCell align="left">{row.corporatename}</TableCell>
                                    <TableCell align="left">{row.corporateactualaccount}</TableCell>
                                    <TableCell align="left">{row.corporatevirtualaccount}</TableCell>
                                </TableRow>
                            )

                            )}
                        </TableBody> 
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default AllCorporateDetails


