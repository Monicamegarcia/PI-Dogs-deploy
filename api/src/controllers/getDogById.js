const {Dog, Temperament} = require ("../db.js");
const axios = require("axios");

const getDogById = async (id,source) => {
    const dog =
    source === "api"
    ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data
    : await Dog.findByPk(id);
    return dog;
}





module.exports = {getDogById};