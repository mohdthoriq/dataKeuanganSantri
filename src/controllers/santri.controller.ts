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

    if (!user || !user.institutionId) {
      throw new Error("Unauthorized: User must belong to an institution to create Santri");
    }

    // STRICT: Ignore body institutionId, force use of user's institutionId
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
      // institutionName is not needed if we pass valid ID, repo handles it or we pass name of auth user's institution if known
      // For now, passing ID is enough for the Repo if it looks up by ID.
      // If repo logic relies on name for auto-create, we should check repo logic.
      // Current Repo implementation tries to find by ID first.
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

    // STRICT: Always pass user.institutionId
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
    const user = req.user;
    if (!user?.institutionId) throw new Error("Unauthorized: Institution ID missing");

    const id = req.params.id as string;
    if (!id) throw new Error("Invalid santri ID");

    const santri = await this.santriService.getSantriById(id, user.institutionId);

    successResponse(res, "Santri detail fetched successfully", santri);
  };

  updateSantri = async (req: Request, res: Response) => {
    const user = req.user;
    if (!user?.institutionId) throw new Error("Unauthorized: Institution ID missing");

    const id = req.params.id as string;
    if (!id) throw new Error("Invalid santri ID");

    const { nis, fullname, kelas, gender, waliName, institutionName } = req.body;

    // If updating institutionName, ensure it exists
    if (institutionName) {
      let institution = await this.institutionService.getInstitutionByName(institutionName);
      if (!institution) {
        institution = await this.institutionService.createInstitution({
          name: institutionName,
          createdBy: user.id!
        });
      }
    }

    const santri = await this.santriService.updateSantri(id, user.institutionId, {
      nis,
      fullname,
      kelas,
      gender,
      waliName,
    });

    successResponse(res, "Santri updated successfully", santri);
  };

  deleteSantri = async (req: Request, res: Response) => {
    const user = req.user;
    if (!user?.institutionId) throw new Error("Unauthorized: Institution ID missing");

    const id = req.params.id as string;
    if (!id) throw new Error("Invalid santri ID");

    await this.santriService.deleteSantri(id, user.institutionId);

    successResponse(res, "Santri deleted successfully");
  };

  getSantriByWali = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    if (!id) throw new Error("Invalid wali ID");

    const santri = await this.santriService.getSantriByWali(id);

    successResponse(res, "Santri list fetched successfully", santri);
  };
}



