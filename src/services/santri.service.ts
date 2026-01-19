// src/services/santri.service.ts
import type { Santri } from "../database";
import type { SantriRepository, ICreateSantriPayload } from "../repository/santri.repository";
import type { IPaginatedResult } from "../types/common";

export class SantriService {
  constructor(private santriRepo: SantriRepository) { }

  async createSantri(payload: ICreateSantriPayload): Promise<Santri> {
    return this.santriRepo.create(payload);
  }

  async getSantriList(
    institutionId: number,
    page: number,
    limit: number,
    search?: string,
    sortBy?: string,
    order?: "asc" | "desc"
  ): Promise<IPaginatedResult<Santri>> {
    return this.santriRepo.getList({
      institutionId,
      page,
      limit,
      ...(search && { search }),
      ...(sortBy && { sortBy }),
      ...(order && { order }),
    });
  }

  async getSantriById(id: number): Promise<Santri> {
    return this.santriRepo.getById(id);
  }

  async updateSantri(id: number, data: Partial<ICreateSantriPayload>): Promise<Santri> {
    return this.santriRepo.update(id, data);
  }

  async deleteSantri(id: number): Promise<boolean> {
    return this.santriRepo.delete(id);
  }

  async getSantriByWali(waliId: number): Promise<Santri[]> {
    return this.santriRepo.getByWali(waliId);
  }
}

