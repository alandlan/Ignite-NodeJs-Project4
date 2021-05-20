import { Category } from "../infra/typeorm/entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRespository {
  findByName(name: string): Promise<Category | undefined>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRespository, ICreateCategoryDTO };
