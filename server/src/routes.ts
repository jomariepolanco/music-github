import { ProducerController } from "./controller/ProducerController";

export const Routes = [
    {
        method: "get",
        route: "/producers",
        controller: ProducerController, action: "all"
    },
    {
        method: "get",
        route: "/producers/:id",
        controller: ProducerController, action: "one"
    },
    {
        method: "post",
        route: "/producers",
        controller: ProducerController, action: "save"
    },
    {
        method: "delete",
        route: "/producers/:id",
        controller: ProducerController, action: "remove"
    },
]