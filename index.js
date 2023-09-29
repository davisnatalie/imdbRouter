/*
    Import modules
*/
const express = require("express"); 
const app = express();
const logger = require("morgan")
const path = require("path"); 

/*
    Middleware
*/

// Allows us to use EJS
app.set("view engine", "ejs");
// Allows us to use res.render() to send html files from the "views" folder to the browser
app.set("views", path.join(__dirname, "views"));

// Allow the views to read CSS files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Allow smooth useage of URLs, JSON, and see requests in the console
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

const imdbRouter = require("./routes/imdbRouter.js")


app.use("/", imdbRouter)

/*

    Power Button

*/
const PORT = 3000;
app.listen(PORT, () => {
 console.log(`server is listening on port ${PORT}`)

})
