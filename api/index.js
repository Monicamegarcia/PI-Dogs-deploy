//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require("dotenv").config();
const port = process.env.PORT || 3000;
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  console.log("Database connected");
  server.listen(port, "0.0.0.0", () => {
    console.log( "listening at", process.env.PORT); // eslint-disable-line no-console
  });
});

//responsabilidad de iniciar la aplicacion
//en vez de colocar const {sequelize}, se coloco const {conn} y de ahi eso se sincroniza

