const {Router} = require("express");
const temperamentsRouter = Router();

const {temperamentsHandler} = require("../handlers/temperamentsHandler.js");

// GET todos los temperamentos
temperamentsRouter.get("/", temperamentsHandler);

module.exports= temperamentsRouter;