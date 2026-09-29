const express = require("express")
const router = express.Router();

const search = require("./controllers")
const compare = require("./controllers")

router.post("/bens",create)
router.get("/bens",read)

module.exports = router