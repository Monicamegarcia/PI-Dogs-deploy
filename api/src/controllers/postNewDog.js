const {Dog, Temperament} = require ("../db.js");

const postNewDog = async (name, height, weight, yearsLife, image, temperaments) => {
 const newDog = await Dog.create({
        name,
        height,
        weight,
        yearsLife,
        image,
        life_span,
    })
    let addTemper = await Temperament.findAll({
        where: { name: temperaments }
    })
    newDog.addTemperaments(addTemper)
// hook
    return newDog;
    }

module.exports = {postNewDog};