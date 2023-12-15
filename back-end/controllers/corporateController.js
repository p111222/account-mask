import { db } from "../database/connect.js";

export const getAllUserDetails = (req, res) => {
    // Implement login functionality here
    const q = `SELECT cu.corporateid AS corporateid,corporatename,corporatevirtualaccount,corporateactualaccount FROM corporateaccountdetails AS c JOIN corporateusers AS cu ON (cu.corporateid = c.corporateaccountid)`;

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

export const getUserDetails = (req, res) => {
    // Implement login functionality here
    const { id } = req.params
    const q = `SELECT corporateid,corporatename FROM  corporateusers  where corporateid = ?`;

    db.query(q, [id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

export const getUserAccountDetails = (req, res) => {
    // Implement login functionality here
    const { id } = req.params
    const q = `SELECT corporatevirtualaccount,corporateactualaccount FROM  corporateaccountdetails  where corporateaccountid = ?`;

    db.query(q, [id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

