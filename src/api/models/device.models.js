const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
    name: {type: String, required: true},
    modelos: [{type: Schema.Types.ObjectId, ref: "model"}]
});

const Device = mongoose.model('devices', DeviceSchema);

module.exports = Device;

/*"name": "Iphones",
    "modelos": "models"*/