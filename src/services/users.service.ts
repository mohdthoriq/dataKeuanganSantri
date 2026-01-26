import bcrypt from "bcrypt";
import type { IUserRepository, ICreateUserPayload, IUpdateUserPayload, IUserListParams } from "../repository/users.repository";
import { NotificationUtil } from "../utils/notification.util";

export class UserService {
  constructor(private userRepo: IUserRepository) { }

  async getAll(params: IUserListParams) {
    return this.userRepo.getAll(params);
  }

  async getById(id: string) {
    return this.userRepo.getById(id);
  }

  async create(payload: ICreateUserPayload, admin: { institutionId: string }) {
    // hashing is handled in repository
    const user = await this.userRepo.create(payload, admin);

    if (payload.role === 'WALI_SANTRI') {
      NotificationUtil.notifyAdminWaliCreated(user.email!, user.username!, admin.institutionId).catch(err => {
        console.error("Failed to send wali creation notification:", err);
        throw new Error("Failed to send wali creation notification");
      });
    }

    return user;
  }

  async update(id: string, payload: IUpdateUserPayload) {
    return this.userRepo.update(id, payload);
  }

  async updateStatus(id: string, isActive: boolean) {
    return this.userRepo.updateStatus(id, isActive);
  }

  async deleteUser(id: string) {
    return this.userRepo.deleteUser(id);
  }
}