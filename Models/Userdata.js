const mongoose = require("mongoose");

const { Schema } = mongoose;

UserdataSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobileNumber: {
    type: Number,
    required: true,
  }

});

module.exports = mongoose.model("userdata", UserdataSchema);
