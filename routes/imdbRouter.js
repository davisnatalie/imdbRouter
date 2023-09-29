/* IMPORTS*/
const express = require("express");
const router = express.Router();
const axios = require("axios"); // `npm install axios`

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key':'85672bc6f6msha0ef2787594e3e2p1fbc46jsnf1f084290f73',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

router.get("/home", async (req, res) => {
  try {
  const response = await axios.request(options);
   console.log(response.data);

  res.render("home", { text: response.data})
    
  } catch (error) {
    console.error(error);                                                                 
  }
})


module.exports = router;