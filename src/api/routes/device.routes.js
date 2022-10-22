const express = require('express');
const {getAllDevice, postDevice} = require('../controllers/device.controllers');
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

router.get('/', getAllDevice);
router.post('/',[isAuth],  postDevice);
router.put('/',[isAuth], (req, res) => {res.send("este es el put")});
router.delete('/', (req, res) => {res.send("este es el delete")});


module.exports = router;

