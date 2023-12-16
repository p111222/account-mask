import React from 'react'
import AllCorporateDetails from '../../components/AllCorporateDetails'
import CorporateUserDetails from '../../components/CorporateUserDetails'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { makeRequest } from '../../axios';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        makeRequest.get('/logout')
            .then((res) => {
                if (res.status === 200) {
                    localStorage.clear();
                    window.location.reload()
                }
            })
    }

    return (
        <>
            <button onClick={handleLogout} className='btn btn-danger me-3 mt-2 position-fixed' style={{ right: '0', zIndex: '999' }}>Logout</button>
            {currentUser.usertype == 'bank' ?
                <AllCorporateDetails /> :
                <CorporateUserDetails />}
        </>
    )
}

export default Details