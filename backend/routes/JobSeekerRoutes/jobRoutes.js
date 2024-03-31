import express from "express";
import {
  deleteJob,
  getAllJobs,
  getMyJobs,
  getSingleJob,
  postJob,
  updateJob,
} from "../../controllers/EmployerController/jobController.js";
import { isAuthenticated,empIsAuthenticated } from "../../middlewares/auth.js";

const router = express.Router();

router.get("/getallJobs", getAllJobs);
router.post("/postJob", empIsAuthenticated, postJob);
router.get("/getmyjobs", empIsAuthenticated, getMyJobs);
router.put("/update/:id", empIsAuthenticated, updateJob);
router.delete("/delete/:id", empIsAuthenticated, deleteJob);
router.get("/:id", empIsAuthenticated, getSingleJob);

export default router;
