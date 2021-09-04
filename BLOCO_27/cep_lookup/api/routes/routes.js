const express = require('express');
const router = express.Router();

const {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} = require('http-status-codes');


router.get('/', (_req, res) => {
  res.status(StatusCodes.OK).send(ReasonPhrases.OK);
});

module.exports = router;