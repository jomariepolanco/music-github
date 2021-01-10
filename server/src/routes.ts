import { ProducerController } from "./controller/ProducerController";
import { AudioController } from "./controller/AudioController";
import { ContributionController } from "./controller/ContributionController";
import { GenreController } from "./controller/GenreController";

export const Routes = [
  //producers
  {
    method: "get",
    route: "/api/producers",
    controller: ProducerController,
    action: "all",
  },
  {
    method: "get",
    route: "/api/producers/:id",
    controller: ProducerController,
    action: "one",
  },
  {
    method: "post",
    route: "/api/producers",
    controller: ProducerController,
    action: "save",
  },
  {
    method: "delete",
    route: "/api/producers/:id",
    controller: ProducerController,
    action: "remove",
  },
  //audios
  {
    method: "get",
    route: "/api/audios",
    controller: AudioController,
    action: "all",
  },
  {
    method: "get",
    route: "/api/audios/:id",
    controller: AudioController,
    action: "one",
  },
  {
    method: "post",
    route: "/api/audios",
    controller: AudioController,
    action: "save",
  },
  {
    method: "delete",
    route: "/api/audios/:id",
    controller: AudioController,
    action: "remove",
  },
  //contributions
  {
    method: "get",
    route: "/api/contributions",
    controller: ContributionController,
    action: "all",
  },
  {
    method: "get",
    route: "/api/contributions/:id",
    controller: ContributionController,
    action: "one",
  },
  {
    method: "post",
    route: "/api/contributions",
    controller: ContributionController,
    action: "save",
  },
  {
    method: "delete",
    route: "/api/contributions/:id",
    controller: ContributionController,
    action: "remove",
  },
  //genres
  {
    method: "get",
    route: "/api/genres",
    controller: GenreController,
    action: "all",
  },
  {
    method: "get",
    route: "/api/genres/:id",
    controller: GenreController,
    action: "one",
  },
  {
    method: "post",
    route: "/api/genres",
    controller: GenreController,
    action: "save",
  },
  {
    method: "delete",
    route: "/api/genres/:id",
    controller: GenreController,
    action: "remove",
  },
];
