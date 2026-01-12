// src/services/santri.service.ts
import type { Santri } from "../generated";
import type { SantriRepository, ICreateSantriPayload } from "../repository/santri.repository";

export class SantriService {
  constructor(private santriRepo: SantriRepository) {}

  async createSantri(payload: ICreateSantriPayload): Promise<Santri> {
    return this.santriRepo.create(payload);
  }

  async getSantriList(
  institutionId: number,
  search?: string
): Promise<Santri[]> {
  return this.santriRepo.getList(institutionId, search);
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
