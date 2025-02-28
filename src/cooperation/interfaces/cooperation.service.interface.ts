export interface ICooperationService {
  getById(id: string);
  getAllByUSer(userId: string);
  create(data: any);
  delete(id: string);
  update(id: string, data: any);
}
