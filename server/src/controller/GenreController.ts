import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { Genre } from "../entity/Genre";

export class GenreController {
  private genreRepo = getRepository(Genre);

  async all(req: Request, res: Response, next: NextFunction) {
    return this.genreRepo.find();
  }

  async one(req: Request, res: Response, next: NextFunction) {
    return this.genreRepo.findOne(req.params.id);
  }

  async save(req: Request, res: Response, next: NextFunction) {
    return this.genreRepo.save(req.body);
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    const Genre = await this.genreRepo.findOne(req.params.id);
    return this.genreRepo.remove(Genre);
  }
}
