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
const createDogs= (req, res) => {
    const { name, height, weight, yearsLife, image, temperaments} = req.body;
    res.send (
        name: ${} ,
        height, 
        weight, 
        yearsLife, 
        image, 
        temperaments
    );
};






module.exports = {
    getAllDogs,
    getDogById,
    getDogsByName,
    createDogs
};