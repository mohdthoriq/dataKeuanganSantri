// src/controllers/institution.controller.ts
import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import type { InstitutionService } from "../services/institution.service";
import type { IInstitutionListParams } from "../repository/institution.repository";

export interface IInstitutionController {
  createInstitution(req: Request, res: Response): Promise<void>;
  getInstitutionsByUser(req: Request, res: Response): Promise<void>;
  getInstitutionById(req: Request, res: Response): Promise<void>;
  updateInstitution(req: Request, res: Response): Promise<void>;
  deleteInstitution(req: Request, res: Response): Promise<void>;
}

export class InstitutionController implements IInstitutionController {
  constructor(private institutionService: InstitutionService) { }

  createInstitution = async (req: Request, res: Response) => {
    const { name } = req.body;
    if (!name) throw new Error("Bad Request");
    if (!req.user?.id) throw new Error("Unauthorized");

    const institution = await this.institutionService.createInstitution({
      name,
      createdBy: req.user.id,
    });

    successResponse(res, "Create institution success", institution);
  };

  getInstitutionsByUser = async (req: Request, res: Response) => {
    if (!req.user?.id) throw new Error("Unauthorized");

    const { page, limit, search, sortBy, order } = req.query;

    const params: IInstitutionListParams = {
      userId: req.user.id,
      ...(page && { page: Number(page) }),
      ...(limit && { limit: Number(limit) }),
      ...(search && { search: search as string }),
      ...(sortBy && { sortBy: sortBy as string }),
      ...(order && { order: order as "asc" | "desc" }),
    };

    const result = await this.institutionService.getInstitutionsByUser(params);

    successResponse(res, "Get institutions success", result.data, result.meta);
  };

  getInstitutionById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error("Invalid institution ID");

    const institution = await this.institutionService.getInstitutionById(id);

    successResponse(res, "Get institution success", institution);
  };

  updateInstitution = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { name } = req.body;
    if (isNaN(id) || !name) throw new Error("Bad Request");
    if (!req.user?.id) throw new Error("Unauthorized");

    const institution = await this.institutionService.updateInstitution(id, name);

    successResponse(res, "Update institution success", institution);
  };

  deleteInstitution = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error("Invalid institution ID");

    await this.institutionService.deleteInstitution(id);

    successResponse(res, "Delete institution success", true);
  };
}
