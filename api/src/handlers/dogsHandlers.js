//interactua con el controller (lo usa) y recibe la request y maneja la respuesta

const postNewDog = require("../controllers/postNewDog");
const getDogById = require("../controllers/getDogById");


const getDogsHandler = (req, res) => {
    const {name} = req.query;
    if (name) res.send ();
    else res.send ();
};


const getDogHandler = async (req, res) => {
    const {id} = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const dog = await getDogById (id, source);
        res.status(200).json("ok");
    } catch (error) {
        res.status(400).json({error: error.message});
    }  
};

//si id es NaN significa que es una UUID y voy a la bbd, sino significa que es un numero
//y voy a la api

const postDogHandler= async (req, res) => {
    const { name, height, weight, lifeSpan, image, temperaments } = req.body;

    try {
    const newDog = await postNewDog(name, height, weight, lifeSpan, image, temperaments);
    res.status (201).json(newDog);

   } catch (error) {
    res.status(400).json( {error: error.message});
   }
};



module.exports = {
    getDogsHandler,
    getDogHandler,
    postDogHandler
};