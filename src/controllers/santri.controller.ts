// src/controllers/santri.controller.ts
import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import type { SantriService } from "../services/santri.service";

export class SantriController {
  constructor(private santriService: SantriService) {}

  createSantri = async (req: Request, res: Response) => {
    const { nis, fullname, kelas, waliId, institutionId } = req.body;

    if (!nis || !fullname || !kelas || !waliId || !institutionId) throw new Error("Missing required fields");

    const santri = await this.santriService.createSantri({ nis, fullname, kelas, waliId, institutionId });

    successResponse(res, "Santri created successfully", santri);
  };

  getSantriList = async (req: Request, res: Response) => {
  const institutionId = Number(req.query.institutionId);
  const search = String(req.query.search || "").trim();

  if (isNaN(institutionId)) {
    throw new Error("Invalid institution ID");
  }

  const santriList = await this.santriService.getSantriList(
    institutionId,
    search
  );

  successResponse(res, "Santri list fetched successfully", santriList);
};


  getSantriById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error("Invalid santri ID");

    const santri = await this.santriService.getSantriById(id);

    successResponse(res, "Santri detail fetched successfully", santri);
  };

  updateSantri = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error("Invalid santri ID");

    const { nis, fullname, kelas, waliId, institutionId } = req.body;

    const santri = await this.santriService.updateSantri(id, { nis, fullname, kelas, waliId, institutionId });

    successResponse(res, "Santri updated successfully", santri);
  };

  deleteSantri = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error("Invalid santri ID");

    await this.santriService.deleteSantri(id);

    successResponse(res, "Santri deleted successfully");
  };

  getSantriByWali = async (req: Request, res: Response) => {
    const waliId = Number(req.params.waliId);
    if (isNaN(waliId)) throw new Error("Invalid wali ID");

    const santriList = await this.santriService.getSantriByWali(waliId);

    successResponse(res, "Santri list by wali fetched successfully", santriList);
  };
}
