import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {});
router.get("/", (req, res) => {});
router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});

// ===== wali =====
router.get("/wali/my", (req, res) => {});

export default router;
