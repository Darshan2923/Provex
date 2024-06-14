import express from 'express';
import { localVariables } from '../middleware/auth.js';
import { createResetSession, findUserByEmail, generateOTP, googleAuthSignIn, logout, resetPassword, signin, signup, verifyOTP } from '../controllers/auth.js';


const router = express.Router();

router.post("signup", signup);
router.post("/signin", signin);
router.post("/logout", logout);
router.post("/google", googleAuthSignIn);
router.get('/findbyemail', findUserByEmail);
router.get("/generateotp", localVariables, generateOTP);
router.get('/verifyotp', verifyOTP);
router.get("/createResetSession", createResetSession);
router.get("/forgetpassword", resetPassword);