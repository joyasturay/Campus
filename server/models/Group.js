const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    college: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
      required: true
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    members: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }],
    messages: [{
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
      content: {
        type: String,
        required: true,
        trim: true
      },
      timestamp: {
        type: Date,
        default: Date.now
      }
    }],
    isActive: {
      type: Boolean,
      default: true
    },
    maxMembers: {
      type: Number,
      default: 100
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Group", GroupSchema);