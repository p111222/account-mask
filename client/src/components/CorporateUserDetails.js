import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { makeRequest } from '../axios';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const CorporateUserDetails = () => {
    const { currentUser } = useContext(AuthContext)
    const [corporateDetails, setCorporateDetails] = useState();
    useEffect(() => {
        makeRequest.get(`/corporate/userdetails/${currentUser.userid}`)
            .then((res) => {
                setCorporateDetails(res.data[0])
            })
    }, [])

    return (
        <div className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
            <div className="d-flex flex-column gap-2">
                <h2 className='ms-2'>Corporate User Details</h2>
                <Card className='p-5 rounded-8' style={{ width: 'fit-content' }}>
                    <CardContent className='d-flex gap-5'>
                        <div className="d-flex flex-column gap-2">
                            <span>ID</span>
                            <span >Corporate Name</span>
                        </div>
                        <div className="d-flex flex-column gap-2">
                            <span>{corporateDetails && corporateDetails.corporateid}</span>
                            <span><Link to='/corporateaccountdetails'>
                                {corporateDetails && corporateDetails.corporatename}</Link></span>
                        </div>
                    </CardContent>

                </Card>
            </div>
        </div>
    );
}

export default CorporateUserDetails