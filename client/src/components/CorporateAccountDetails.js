import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const CorporateAccountDetails = () => {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
            <div className="d-flex flex-column gap-2">
                <h2 className='ms-2'>Corporate Account Details</h2>
                <Card className='p-5 rounded-8' style={{ width: 'fit-content' }}>
                    <CardContent className='d-flex gap-5'>
                        <div className="d-flex flex-column gap-2">
                            <span>Virtual Account Number</span>
                            <span >Actual Account Number</span>
                        </div>
                        <div className="d-flex flex-column gap-2">
                            <span>4041 3124 0943 0394</span>
                            <span>1234 5678 0091 2312</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default CorporateAccountDetails