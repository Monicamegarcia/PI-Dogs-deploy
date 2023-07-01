//interactua con el controller (lo usa) y recibe la request y maneja la respuesta

const postNewDog = require("../controllers/postNewDog");

const getDogsHandler = (req, res) => {
    const {name} = req.query;
    if (name) res.send ();
    else res.send ();
};
const getDogHandler = (req, res) => {
    const {id} = req.params;
    res.send (`${id}`);
    
};


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