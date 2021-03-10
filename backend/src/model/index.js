const {
  Schema,
  model
} = require("mongoose");

const schemaTask = new Schema({
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true,
    default: false,
  },
  pending: {
    type: Boolean,
    required: true,
    default: true,
  }
});

const ModelTask = model("tasks", schemaTask)

exports.ModelTask = ModelTask;