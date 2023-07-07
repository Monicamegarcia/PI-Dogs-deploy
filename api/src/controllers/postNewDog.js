//interactua con los modelos Dog y Temperament

const {Dog, Temperament} = require ("../db.js");

const postNewDog = async (name, height, weight, yearsLife, image, temperaments) => {
 const newDog = await Dog.create({
        name,
        height,
        weight,
        yearsLife,
        image,
    });
    const addTemper = await Temperament.findAll({
       where: {name: temperaments },
    });
    newDog.addTemperament(addTemper) 
// asociacion add
    return newDog;
    };

module.exports = postNewDog;

//lo metodos del modelo manejan promesas, una funcion async da una promesa



