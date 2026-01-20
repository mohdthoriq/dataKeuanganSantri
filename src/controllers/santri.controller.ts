// src/controllers/santri.controller.ts
import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import type { SantriService } from "../services/santri.service";
import type { InstitutionService } from "../services/institution.service";

export class SantriController {
  constructor(
    private santriService: SantriService,
    private institutionService: InstitutionService
  ) { }

  createSantri = async (req: Request, res: Response) => {
    const user = req.user;

    if (!user?.institutionId) {
      throw new Error("Institution not found in token");
    }

    const { nis, fullname, kelas, gender, waliName } = req.body;

    if (!nis || !fullname || !kelas || !gender || !waliName) {
      throw new Error("Missing required fields");
    }

    const santri = await this.santriService.createSantri({
      nis,
      fullname,
      kelas,
      gender,
      waliName,
      institutionId: user.institutionId,
    });

    successResponse(res, "Santri created successfully", santri);
  };

  getSantriList = async (req: Request, res: Response) => {
    const user = req.user;

    if (!user || !user.institutionId) {
      throw new Error("Unauthorized");
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search as string | undefined;
    const order = (req.query.order as "asc" | "desc") ?? "desc";

    const allowedSort = ["createdAt", "fullname", "kelas"];
    const sortBy = allowedSort.includes(String(req.query.sortBy))
      ? String(req.query.sortBy)
      : "createdAt";

    const result = await this.santriService.getSantriList(
      user.institutionId,
      page,
      limit,
      search,
      sortBy,
      order
    );

    successResponse(res, "Santri list fetched successfully", result);
  };

  getSantriById = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    if (!id) throw new Error("Invalid santri ID");

    const santri = await this.santriService.getSantriById(id);

    successResponse(res, "Santri detail fetched successfully", santri);
  };

  updateSantri = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    if (!id) throw new Error("Invalid santri ID");

    const { nis, fullname, kelas, gender, waliName, institutionName } = req.body;

    // If updating institutionName, ensure it exists
    if (institutionName) {
      let institution = await this.institutionService.getInstitutionByName(institutionName);
      if (!institution) {
        institution = await this.institutionService.createInstitution({
          name: institutionName,
          createdBy: "1"
        });
      }
    }

    const santri = await this.santriService.updateSantri(id, {
      nis,
      fullname,
      kelas,
      gender,
      waliName,
    });

    successResponse(res, "Santri updated successfully", santri);
  };

  deleteSantri = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    if (!id) throw new Error("Invalid santri ID");

    await this.santriService.deleteSantri(id);

    successResponse(res, "Santri deleted successfully");
  };

  getSantriByWali = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    if (!id) throw new Error("Invalid wali ID");

    const santri = await this.santriService.getSantriByWali(id);

    successResponse(res, "Santri list fetched successfully", santri);
  };
}



