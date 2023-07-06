const {Router} = require("express");

const dogsRouter = Router();

const {
    getDogsHandler,
    getDogHandler,
    postDogHandler,
} = require("../handlers/dogsHandlers");

//Ruta para traer todos los perros o por nombre
dogsRouter.get("/", getDogsHandler);

//Ruta para traer perrros por id
dogsRouter.get("/:id", getDogHandler);

//Ruta para crear perros
dogsRouter.post("/", postDogHandler);

module.exports = dogsRouter;

//todas las rutas de perros, con sus endpoints. enrutador de perros