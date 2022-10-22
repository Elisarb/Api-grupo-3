const Device = require('../models/device.models');

const getAllDevice = async (req, res, next) => {
    try {
        const devices = await Device.find().populate("modelos");
        return res.status(200).json(devices);
    } catch (error) {
        return res.status(500).json(error) ;
    }
}


const postDevice = async (req, res, next) => {
    try {
        const newDevice = new Device(req.body);
        const createdDevice = await newDevice.save();
        return res.status(200).json(createdDevice) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

module.exports = {getAllDevice, postDevice}