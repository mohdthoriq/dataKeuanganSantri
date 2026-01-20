import { InstitutionRepository, type ICreateInstitutionPayload, type IInstitutionListParams } from "../repository/institution.repository";

export class InstitutionService {
  constructor(private institutionRepo: InstitutionRepository) { }

  async createInstitution(payload: ICreateInstitutionPayload) {
    return this.institutionRepo.create(payload);
  }

  async getInstitutionById(id: string) {
    return this.institutionRepo.getById(id);
  }

  async getInstitutionsByUser(params: IInstitutionListParams) {
    return this.institutionRepo.getByUser(params);
  }

  async updateInstitution(id: string, name: string) {
    return this.institutionRepo.update(id, name);
  }

  async deleteInstitution(id: string) {
    return this.institutionRepo.delete(id);
  }

  async getInstitutionByName(name: string) {
    return this.institutionRepo.getByName(name);
  }
}
