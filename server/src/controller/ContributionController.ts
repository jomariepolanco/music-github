import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { Audio } from "../entity/Audio";
import { Contribution } from "../entity/Contribution";

export class ContributionController {
  private contributionRepo = getRepository(Contribution);

  async all(req: Request, res: Response, next: NextFunction) {
    const contributions = await Contribution.find({relations: ['audio']})
    return contributions;
  }

  async one(req: Request, res: Response, next: NextFunction) {
    return this.contributionRepo.findOne(req.params.id);
  }

  async save(req: Request, res: Response, next: NextFunction) {
    const {audioId, comment, track, date} = req.body 
    const audio = await Audio.findOneOrFail({id: audioId})
    
    const contribution = new Contribution()
    contribution.comment = comment
    contribution.track = track
    contribution.date = date 
    contribution.audio = audio

    return this.contributionRepo.save(contribution);
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    const contribution = await this.contributionRepo.findOne(req.params.id);
    return this.contributionRepo.remove(contribution);
  }
}
