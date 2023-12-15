import { db } from "../database/connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
    // Implement login functionality here
    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length == 0) return res.status(404).json("user not found");

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

        if (!checkPassword) return res.status(400).json("wrong password or username");

        const token = jwt.sign({ id: data[0].id }, "secretkey");
        const { password, ...others } = data[0]

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(others);
    });
};

export const logout = (req, res) => {
    // Implement logout functionality here
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("user has been logged out.")
};