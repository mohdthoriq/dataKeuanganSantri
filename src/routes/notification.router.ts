import { Router } from "express";

const router = Router();

router.get("/", (req, res)=> {});
router.patch("/:id/read", (req, res)=> {});
router.patch("/read-all", (req, res)=> {});

export default router;
