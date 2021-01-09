import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { Producer } from "../entity/Producer";

export class ProducerController {
  private producerRepo = getRepository(Producer);

  async all(req: Request, res: Response, next: NextFunction) {
    return this.producerRepo.find();
  }

  async one(req: Request, res: Response, next: NextFunction) {
    return this.producerRepo.findOne(req.params.id);
  }

  async save(req: Request, res: Response, next: NextFunction) {
    return this.producerRepo.save(req.body);
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    const producer = await this.producerRepo.findOne(req.params.id);
    return this.producerRepo.remove(producer);
  }
}
