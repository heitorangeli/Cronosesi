const express = require("express")
const router = express.Router();

const { search } = require("./controllers");

router.post("/contas", search)

module.exports = router