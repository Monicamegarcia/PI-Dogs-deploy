const {Router} = require("express");

const dogsRouter = Router();

const {
    getAllDogs,
    getDogById,
    getDogsByName,
    postNewDog,
} = require("../handlers/dogsHandlers");

//Ruta para traer todos los perros
dogsRouter.get("/", getAllDogs);

//Ruta para traer perrros por id
dogsRouter.get("/:idRaza", getDogById);

//Ruta para traer perros por nombre, aca fijarse que el manejador puede ser el mismo que el getAllDogs
dogsRouter.get("/name?=", getDogsByName);

//Ruta para crear perros
dogsRouter.post("/", postNewDog);

module.exports = dogsRouter;

//todas las rutas de perros, con sus endpoints. enrutador de perros