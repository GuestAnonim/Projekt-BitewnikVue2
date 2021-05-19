const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    city: { type: String, required: true }
});
module.exports = mongoose.model('user', UserModel, 'bitewnik');