const { createQR } = require("../controller/qr");
const Router = require("express").Router;

const qrRouter = Router();



qrRouter.get("/create-qr", createQR);


module.exports = qrRouter;