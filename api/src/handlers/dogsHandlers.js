//interactua con el controller (lo usa) y recibe la request y maneja la respuesta
const deleteDog = require("../controllers/deleteDog");
const getAllDogs = require("../controllers/getAllDogs");
const getDogsById = require("../controllers/getDogById");
const getDogsByName = require("../controllers/getDogsByName");
const postNewDog = require("../controllers/postNewDog");

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
}

// Maneja la ruta GET de los perros por id
const getDogHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getDogsById(id);
    return res.status(200).json(response)
  }
  catch (error) {
    return res.status(500).json(error.message)
  }
}

// Maneja la ruta POST de los perros
const postDogHandler = async (req, res) => {
  try {
    const { name, image, height, weight, life_span, temperaments } = req.body;

    const newDog = await postNewDog(name, image, height, weight, life_span, temperaments)

    res.status(200).send(newDog);
  }
  catch (error) {
    return res.status(404).json(error.message)
  }
}

// Maneja la ruta DELETE de los perros
const deleteDogHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteDog(id)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json(error.message)
  }
}

module.exports = {
  getDogsHandler,
  getDogHandler,
  postDogHandler,
  deleteDogHandler
}


/*const getDogHandler = async (req, res) => {
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
//y voy a la api*/