import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepository);
  });

  it("shuold be able to list all available cars", async () => {
    const car = carsRepository.create({
      brand: "Car Brand",
      category_id: "category_id",
      daily_rate: 100.0,
      description: "Car Description",
      fine_amount: 60,
      license_plate: "DEF-1213",
      name: "Car1",
    });

    const cars = await listCarsUseCase.execute();

    expect(cars).toEqual([car]);
  });
});