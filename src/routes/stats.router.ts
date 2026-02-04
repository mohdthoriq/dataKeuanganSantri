// src/routes/stats.router.ts
import { Router } from "express";
import PrismaInstance from "../database";
import { StatsRepository } from "../repository/stats.repository";
import { StatsService } from "../services/stats.service";
import { StatsController } from "../controllers/stats.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

const repo = new StatsRepository(PrismaInstance);
const service = new StatsService(repo);
const controller = new StatsController(service);

/**
 * @swagger
 * tags:
 *   name: Stats
 *   description: Statistik Dashboard
 */

/**
 * @swagger
 * /api/stats:
 *   get:
 *     summary: Get dashboard overview stats
 *     tags:
 *       - Stats
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Berhasil mengambil statistik
 */
router.get("/", authenticate, controller.getOverview);

export default router;
