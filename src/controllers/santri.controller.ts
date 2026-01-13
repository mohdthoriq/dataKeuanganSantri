// src/controllers/santri.controller.ts
import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import type { SantriService } from "../services/santri.service";
import type { InstitutionService } from "../services/institution.service";

export class SantriController {
  constructor(
    private santriService: SantriService,
    private institutionService: InstitutionService
  ) {}

  createSantri = async (req: Request, res: Response) => {
    const { nis, fullname, kelas, gender, waliName, institutionName } = req.body;

    if (!nis || !fullname || !kelas || !gender || !waliName || !institutionName) {
      throw new Error("Missing required fields");
    }

    // Auto-create institution if it doesn't exist
    let institution = await this.institutionService.getInstitutionByName(institutionName);
    if (!institution) {
      console.log(`Institution '${institutionName}' not found, creating new one...`);
      
      // Use a default admin ID (1) for auto-created institutions
      institution = await this.institutionService.createInstitution({
        name: institutionName,
        createdBy: 1
      });
    }

    const santri = await this.santriService.createSantri({
      nis,
      fullname,
      kelas,
      gender,
      waliName,
      institutionName
    });

    successResponse(res, "Santri created successfully", santri);
  };

  getSantriList = async (req: Request, res: Response) => {
    const institutionName = req.query.institutionName as string | undefined;

    const santriList = await this.santriService.getSantriList(institutionName);

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

    const { nis, fullname, kelas, gender, waliName, institutionName } = req.body;

    // If updating institutionName, ensure it exists
    if (institutionName) {
      let institution = await this.institutionService.getInstitutionByName(institutionName);
      if (!institution) {
        institution = await this.institutionService.createInstitution({
          name: institutionName,
          createdBy: 1
        });
      }
    }

    const santri = await this.santriService.updateSantri(id, {
      nis,
      fullname,
      kelas,
      gender,
      waliName,
      institutionName
    });

    successResponse(res, "Santri updated successfully", santri);
  };

  deleteSantri = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error("Invalid santri ID");

    await this.santriService.deleteSantri(id);

    successResponse(res, "Santri deleted successfully");
  };
}
