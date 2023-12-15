import React from 'react'
import AllCorporateDetails from '../../components/AllCorporateDetails'
import CorporateUserDetails from '../../components/CorporateUserDetails'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';


const Details = () => {
    const { currentUser } = useContext(AuthContext)

    return (
        <>
            {currentUser.usertype == 'bank' ?
                <AllCorporateDetails /> :
                <CorporateUserDetails />}
        </>
    )
}

export default Details