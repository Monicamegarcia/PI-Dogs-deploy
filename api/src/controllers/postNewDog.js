//interactua con los modelos Dog y Temperament
const { Dog, Temperament } = require("../db")

// Crea un nuevo perro y lo guarda en la DB

const postNewDog = async (name, image, height, weight, life_span, temperaments) => {

  if(!name || !image || !height || !weight || !life_span || !temperaments) throw Error ("Missing Dog Information!")

  const newDog = await Dog.create({
    name,
    image,
    height,
    weight,
    life_span,
    //temperaments,
  })
  //agregue temperaments
  let addTemper = await Temperament.findAll({
    where: { name: temperaments }
  })
  newDog.addTemperaments(addTemper)
  //ver si va con s o no

  return newDog;
}

module.exports = postNewDog;

//lo metodos del modelo manejan promesas, una funcion async da una promesa



