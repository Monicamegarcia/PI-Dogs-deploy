const { Router } = require('express');
const dogsRouter = require("./dogsRouter");
const temperamentsRouter = require("./temperamentsRouter");



const router = Router();

router.use("/dogs", dogsRouter);


module.exports = router;

//enrutador