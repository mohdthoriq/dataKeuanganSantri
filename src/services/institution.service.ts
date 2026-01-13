import { InstitutionRepository, type ICreateInstitutionPayload } from "../repository/institution.repository";

export class InstitutionService {
  constructor(private institutionRepo: InstitutionRepository) {}

  async createInstitution(payload: ICreateInstitutionPayload) {
    return this.institutionRepo.create(payload);
  }

  async getInstitutionById(id: number) {
    return this.institutionRepo.getById(id);
  }

  async getInstitutionsByUser(userId: number) {
    return this.institutionRepo.getByUser(userId);
  }

  async updateInstitution(id: number, name: string) {
    return this.institutionRepo.update(id, name);
  }

  async deleteInstitution(id: number) {
    return this.institutionRepo.delete(id);
  }

  async getInstitutionByName(name: string) {
    return this.institutionRepo.getByName(name);
  }
}
