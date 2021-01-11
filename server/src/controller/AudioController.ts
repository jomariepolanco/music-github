import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { Audio } from "../entity/Audio";
import { Genre } from "../entity/Genre";
import { Producer } from "../entity/Producer";

export class AudioController {
  private audioRepo = getRepository(Audio);

  async all(req: Request, res: Response, next: NextFunction) {
    const audios = await Audio.find({relations: ['producer', 'genre']})
    return audios;
  }

  async one(req: Request, res: Response, next: NextFunction) {
    return this.audioRepo.findOne(req.params.id);
  }

  async save(req: Request, res: Response, next: NextFunction) {
    const { producerId, genreId, track, title} = req.body
    const producer = await Producer.findOneOrFail({id: producerId})
    const genre = await Genre.findOneOrFail({id: genreId})

    const audio = new Audio()
    audio.title = title 
    audio.track = track 
    audio.producer = producer
    audio.genre = genre

    return this.audioRepo.save(audio);
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    const audio = await this.audioRepo.findOne(req.params.id);
    return this.audioRepo.remove(audio);
  }
}
