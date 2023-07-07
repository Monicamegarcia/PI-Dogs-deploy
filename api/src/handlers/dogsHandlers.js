//interactua con el controller (lo usa) y recibe la request y maneja la respuesta

const postNewDog = require("../controllers/postNewDog");
const getDogById = require("../controllers/getDogById");
const getDogsByName = require("../controllers/getDogsByName");
const getAllDogs = require("../controllers/getAllDogs");


    // Maneja la ruta GET de todos los perros o por nombre 
const getDogsHandler = async (req, res) => {
    try {
      const { name } = req.query;
  
      // Si no me pasan el name, traigo todos
      if(!name) return res.status(200).send(await getAllDogs());
      return res.send(await getDogsByName(name));
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  };

const getDogHandler = async (req, res) => {
    const {id} = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const dog = await getDogById (id, source);
        res.status(200).json(dog);
    } catch (error) {
        res.status(400).json({error: error.message});
    }  
};

//si id es NaN significa que es una UUID y voy a la bbd, sino significa que es un numero
//y voy a la api


const postDogHandler = async (req, res) => {
  const { name, height, weight, yearsLife, image, temperaments } = req.body;
  //if (!temperaments || temperaments.trim() === '') {
    //throw new Error('El nombre del temperamento es inválido');
  //}
  try {
    const newDog = await postNewDog(name, height, weight, yearsLife, image, temperaments);
    res.status(201).json(newDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};





module.exports = {
    getDogsHandler,
    getDogHandler,
    postDogHandler
};