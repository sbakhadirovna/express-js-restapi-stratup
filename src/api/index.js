const express = require("express");
const handleErrors = require("../shared/errors/handle-errors");
const exampleRoutes = require("../modules/example/_routes");

const router = express.Router();

router.use(handleErrors);
router.use(exampleRoutes);

module.exports = router;
