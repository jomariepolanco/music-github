import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { Contribution } from "../entity/Contribution";

export class ContributionController {
  private contributionRepo = getRepository(Contribution);

  async all(req: Request, res: Response, next: NextFunction) {
    return this.contributionRepo.find();
  }

  async one(req: Request, res: Response, next: NextFunction) {
    return this.contributionRepo.findOne(req.params.id);
  }

  async save(req: Request, res: Response, next: NextFunction) {
    return this.contributionRepo.save(req.body);
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    const Contribution = await this.contributionRepo.findOne(req.params.id);
    return this.contributionRepo.remove(Contribution);
  }
}
