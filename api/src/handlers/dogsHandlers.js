//funciones que interactuan con la base de datos

const postNewDog = require("../controllers/postNewDog");

const getAllDogs = (req, res) => {
    const {name} = req.query;
    if (name) res.send ();
    else res.send ();
};
const getDogById = (req, res) => {
    const {id} = req.params;
    res.send (`${id}`);
    
};
const getDogsByName = () => {
    //ver si es necesaria tal vez se resuelva con la getAllDogs
};
const postDogHandler= async (req, res) => {
   try {
    const { name, height, weight, lifeSpan, image, temperaments } = req.body;
    const newDog = await postNewDog(name, height, weight, lifeSpan, image, temperaments);
    res.status (201).json(newDog);

   } catch (error) {
    res.status(400).json( {error: error.message});
   }
};






module.exports = {
    getAllDogs,
    getDogById,
    getDogsByName,
    postDogHandler
};