const {Router} = require("express");
const temperamentsRouter = Router();

temperamentsRouter.get("/", (req, res)=>{
    res.send("obtiene todos los temperamentos");
});




module.exports= temperamentsRouter;