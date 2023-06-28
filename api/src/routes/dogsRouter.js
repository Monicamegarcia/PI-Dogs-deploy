const {Routes} = require("express");
const dogsRouter = Router();

dogsRouter.get("/", (req, res)=>{
    res.send("trae las razas de perros");
});

dogsRouter.get("/:idRaza", (req,res)=>{
    res.send("Detalle de una raza especifica");
});

dogsRouter.get("/name?="..."",(req,res)=>{
    res.send("Todas las razas que coincidan por el nombre");
});

dogsRouter.post("/", (res, req)=>{
    res.send("Crea un nuevo perro");
});



module.exports = dogsRouter;

//todas las rutas de perros, con sus endpoints. enrutador de perros