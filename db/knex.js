// Initializes knex w/ connection info obtained from configuration in knexfile.js for current environment.
const environment = process.env.NODE_ENV || "development";
const config = require("../knexfile.js")[environment];
module.exports = require("knex")(config);

// npm install dotenv.
