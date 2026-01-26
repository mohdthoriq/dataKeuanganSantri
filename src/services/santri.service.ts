// src/services/santri.service.ts
import type { Santri } from "../database";
import type { SantriRepository, ICreateSantriPayload } from "../repository/santri.repository";
import type { IPaginatedResult } from "../types/common";
import { NotificationUtil } from "../utils/notification.util";

export class SantriService {
  constructor(private santriRepo: SantriRepository) { }

  async createSantri(payload: ICreateSantriPayload): Promise<Santri> {
    const { nis, institutionId, gender } = payload;

    if (!institutionId) {
      throw new Error("Institution ID is required");
    }

    const existing = await this.santriRepo.findByNis(
      nis,
      institutionId
    );

    if (existing) {
      throw new Error("NIS already exists in this institution");
    }

    if (!["Laki-laki", "Perempuan"].includes(gender)) {
      throw new Error("Invalid gender value");
    }

    const santri = await this.santriRepo.create({
      ...payload,
      isActive: true
    });

    // Notify Admin
    NotificationUtil.notifyAdminSantriCreated(santri.fullname, santri.nis, institutionId).catch(err => {
      console.error("Failed to send santri creation notification:", err);
    });

    return santri;
  }


  async getSantriList(
    institutionId: string,
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

  async getSantriById(id: string, institutionId: string): Promise<Santri> {
    return this.santriRepo.getById(id, institutionId);
  }

  async updateSantri(id: string, institutionId: string, data: Partial<ICreateSantriPayload>): Promise<Santri> {
    const updated = await this.santriRepo.update(id, institutionId, data);

    // Notify Admin & Wali
    NotificationUtil.notifySantriUpdated(updated.id, institutionId).catch(err => {
      console.error("Failed to send santri update notification:", err);
      throw new Error("Failed to send santri update notification");
    });

    return updated;
  }

  async deleteSantri(id: string, institutionId: string): Promise<boolean> {
    return this.santriRepo.delete(id, institutionId);
  }

  async getSantriByWali(waliId: string): Promise<Santri[]> {
    return this.santriRepo.getByWali(waliId);
  }
}



