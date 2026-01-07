import bcrypt from "bcrypt";
import type { IUserRepository, ICreateUserPayload, IUpdateUserPayload, IGetAllUsersParams } from "../repository/users.repository";

export class UserService {
  constructor(private userRepo: IUserRepository) {}

  async getAll(params: IGetAllUsersParams) {
    return this.userRepo.getAll(params);
  }

  async getById(id: number) {
    return this.userRepo.getById(id);
  }

  async create(payload: ICreateUserPayload, admin: { institutionId: number }) {
    // hash password dulu
    payload.password = await bcrypt.hash(payload.password, 10);
    return this.userRepo.create(payload, admin);
  }

  async update(id: number, payload: IUpdateUserPayload) {
    return this.userRepo.update(id, payload);
  }

  async updateStatus(id: number, isActive: boolean) {
    return this.userRepo.updateStatus(id, isActive);
  }

  async deleteUser(id: number) {
    return this.userRepo.deleteUser(id);
  }
}
