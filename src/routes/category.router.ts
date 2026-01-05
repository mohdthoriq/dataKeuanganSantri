import Router from "express";

const router = Router();

router.post("/", (req, res) => {}) // admin input 
router.get("/", (req, res) => {}) // filter: santri, date, category
router.get("/:id", (req, res) => {}) // get by id
router.put("/:id", (req, res) => {}) // update by id
router.patch("/:id/status", (req, res) => {}) // update status by id
router.delete("/:id", (req, res) => {}) // delete by id

export default router
