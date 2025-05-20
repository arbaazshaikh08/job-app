import { Router } from "express";
import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateUserDetails,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middelwares/auth.middlewere.js";

const router = Router();
router.route("/register-user").post(registerUser);
router.route("/login-user").post(loginUser);
router.route("/refresh-token").post(refreshAccessToken);

// Secure Routes
router.route("/logout-user").post(verifyJWT, logoutUser);
router.route("/update-user").post(verifyJWT, updateUserDetails);

export default router;