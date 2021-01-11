import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { Audio } from "../entity/Audio";

export class AudioController {
  private audioRepo = getRepository(Audio);

  async all(req: Request, res: Response, next: NextFunction) {
    return this.audioRepo.find();
  }

  async one(req: Request, res: Response, next: NextFunction) {
    return this.audioRepo.findOne(req.params.id);
  }

  async save(req: Request, res: Response, next: NextFunction) {
    return this.audioRepo.save(req.body);
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    const audio = await this.audioRepo.findOne(req.params.id);
    return this.audioRepo.remove(audio);
  }
}
