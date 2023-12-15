import express from "express";
import {getAllUserDetails,getUserDetails,getUserAccountDetails} from "../controllers/corporateController.js"
const router = express.Router()

router.get("/userdetails",getAllUserDetails)
router.get("/userdetails/:id",getUserDetails)
router.get("/userdetails/account/:id",getUserAccountDetails)

export default router