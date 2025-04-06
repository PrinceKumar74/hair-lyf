//by which route i need to call which controller
const express = require("express");
const { registerUser,loginUser ,logoutUser, authMiddleware} = require("../../controllers/auth/auth-controller");

const router = express.Router();

//it means whenever i go on the register route on the frontend then i will registerUser function which is in auth-controller.js
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get('/check-auth', authMiddleware, (req,res) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        message: 'Authenticated User',
        user
    })
})



module.exports = router