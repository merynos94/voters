const HttpError = require('../models/http-error');
const resultsUri = 'http://localhost:3060/results';
const axios = require('axios').default

const logError = (err) => {
  console.log("=============================")
  console.log("ERROR: ", err.message)
  console.log(err)
  console.log("=============================")
}

const getResults = async (req, res, next) => {
  try {
    const response = await axios.get(resultsUri);
    console.log("=============================")
    console.log("RESPONSE: ", response)
    console.log("=============================")
    console.log("BODY: ", response.data)
    console.log("=============================")
      res.json(response.data);
  } catch (err) {
    logError(err);
    const error = new HttpError(err.message, 500);
    return next(error);
  }
};

exports.getResults = getResults;
