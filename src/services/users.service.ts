import bcrypt from "bcrypt";
import type { IUserRepository, ICreateUserPayload, IUpdateUserPayload, IUserListParams } from "../repository/users.repository";

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
    return this.userRepo.create(payload, admin);
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