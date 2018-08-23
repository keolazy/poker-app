// this was app.js in Q2
const express = requrie("express");
const methodOverride = require("method-override");
const app = express();
const PORT = process.env.PORT || 7777;
const knex = require("../db/knex"); // retrives knex.js set up
const path = require("path");
const session = require("express-session");

const events = require("./routes/events-routes");
const profiles = require("./routes/profiles-routes");
const account = require("./routes/accounts-routes");

const auth = require("./controllers/auth");
const signup = require("./controllers/signup");

const bodyParser = require("body-parser");

// override using a query value.
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));
// Safer to use the absolute path of the directory you want to serve.
app.use(express.static(path.join(__dirname, "public")));
