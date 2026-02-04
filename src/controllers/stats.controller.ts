// src/controllers/stats.controller.ts
import type { Request, Response, NextFunction } from "express";
import type { StatsService } from "../services/stats.service";
import { successResponse } from "../utils/response";

export class StatsController {
    constructor(private service: StatsService) { }

    getOverview = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const institutionId = req.user?.institutionId;
            if (!institutionId) {
                throw new Error("Institution ID tidak ditemukan");
            }
            const stats = await this.service.getOverview(institutionId);

            return successResponse(res, "Statistik berhasil diambil", stats);
        } catch (error) {
            next(error);
        }
    };
}
