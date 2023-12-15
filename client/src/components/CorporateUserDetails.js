import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

const CorporateUserDetails = () => {
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
                            <span>200</span>
                            <span>MSEB</span>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small">
                            <Link to='/corporateaccountdetails'>Details</Link>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default CorporateUserDetails