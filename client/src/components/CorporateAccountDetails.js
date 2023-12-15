import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { makeRequest } from '../axios';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const CorporateAccountDetails = () => {
    const { currentUser } = useContext(AuthContext)
    const [corporateAccountDetails, setCorporateAccountDetails] = useState();
    useEffect(() => {
        makeRequest.get(`/corporate/userdetails/account/${currentUser.userid}`)
            .then((res) => {
                setCorporateAccountDetails(res.data[0])
            })
    }, []);
    //console.log(corporateAccountDetails);
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
            <div className="d-flex flex-column gap-2">
                <h2 className='ms-2 text-center'>Corporate Account Details</h2>
                <Card className='p-5 rounded-8' style={{ width: 'fit-content' }}>
                    <CardContent className='d-flex gap-5'>
                        <div className="d-flex flex-column gap-2">
                            <span>Virtual Account Number</span>
                            <span >Actual Account Number</span>
                        </div>
                        <div className="d-flex flex-column gap-2">
                            <span>{corporateAccountDetails && corporateAccountDetails.corporatevirtualaccount}</span>
                            <span>{corporateAccountDetails && corporateAccountDetails.corporateactualaccount}</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default CorporateAccountDetails