const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const chatSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User",
      },
    ],
    messages: [messageSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chat", chatSchema);
