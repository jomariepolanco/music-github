import { ProducerController } from "./controller/ProducerController";
import { AudioController } from "./controller/AudioController";
import { ContributionController } from "./controller/ContributionController";
import { GenreController } from "./controller/GenreController";

export const Routes = [
  //producers
  {
    method: "get",
    route: "/producers",
    controller: ProducerController,
    action: "all",
  },
  {
    method: "get",
    route: "/producers/:id",
    controller: ProducerController,
    action: "one",
  },
  {
    method: "post",
    route: "/producers",
    controller: ProducerController,
    action: "save",
  },
  {
    method: "delete",
    route: "/producers/:id",
    controller: ProducerController,
    action: "remove",
  },
  //audios
  {
    method: "get",
    route: "/audios",
    controller: AudioController,
    action: "all",
  },
  {
    method: "get",
    route: "/audios/:id",
    controller: AudioController,
    action: "one",
  },
  {
    method: "post",
    route: "/audios",
    controller: AudioController,
    action: "save",
  },
  {
    method: "delete",
    route: "/audios/:id",
    controller: AudioController,
    action: "remove",
  },
  //contributions
  {
    method: "get",
    route: "/contributions",
    controller: ContributionController,
    action: "all",
  },
  {
    method: "get",
    route: "/contributions/:id",
    controller: ContributionController,
    action: "one",
  },
  {
    method: "post",
    route: "/contributions",
    controller: ContributionController,
    action: "save",
  },
  {
    method: "delete",
    route: "/contributions/:id",
    controller: ContributionController,
    action: "remove",
  },
  //genres
  {
    method: "get",
    route: "/genres",
    controller: GenreController,
    action: "all",
  },
  {
    method: "get",
    route: "/genres/:id",
    controller: GenreController,
    action: "one",
  },
  {
    method: "post",
    route: "/genres",
    controller: GenreController,
    action: "save",
  },
  {
    method: "delete",
    route: "/genres/:id",
    controller: GenreController,
    action: "remove",
  },
];
