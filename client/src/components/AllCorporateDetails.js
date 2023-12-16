import React, { useState, useEffect } from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
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
                {/* <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='fw-bold'>Corporate ID</TableCell>
                                <TableCell className='fw-bold' align="left">Corporate Name</TableCell>
                                <TableCell className='fw-bold' align="left">Actual Account Number</TableCell>
                                <TableCell className='fw-bold' align="left">Virtual Account Number</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allCorporateDetails && allCorporateDetails.map(row => (
                                <TableRow
                                    key={row.corporateid}
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
                </TableContainer> */}
                <div className="row gap-5">
                    {allCorporateDetails && allCorporateDetails.map(row => (
                        <Card className='col-md-3 p-5 rounded-8' style={{ width: 'fit-content' }}>
                            <CardContent className='d-flex gap-5'>
                                <div className="d-flex flex-column gap-2">
                                    <span>ID</span>
                                    <span >Corporate Name</span>
                                </div>
                                <div className="d-flex flex-column gap-2">
                                    <span>{row.corporateid}</span>
                                    <span><Link to={`/corporateaccountdetails/${row.corporateid}`}>{row.corporatename}</Link></span>
                                </div>
                            </CardContent>

                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllCorporateDetails


