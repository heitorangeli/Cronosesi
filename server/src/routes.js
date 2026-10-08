const express = require("express")
const router = express.Router();

const { search } = require("./controllers");

router.post('/login', search)

module.exports = router