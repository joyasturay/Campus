const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      required: true,
      trim: true
    },
    image:{
      type: String,
      set:(v)=>v===""?"def":v
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false  
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    clubs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Club",
      },
    ],
    groups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group",
      },
    ],
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("College", CollegeSchema);
