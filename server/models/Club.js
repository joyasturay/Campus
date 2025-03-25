const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema(
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
    clubType: {
      type: String,
      required: true,
      enum: ['coding', 'alumni', 'entrepreneurship', 'cultural', 'sports', 'other'],
      default: 'other'
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false
    },
    members: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      role: {
        type: String,
        enum: ['member', 'moderator'],
        default: 'member'
      },
      joinedAt: {
        type: Date,
        default: Date.now
      }
    }],
    joinRequests: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
      },
      requestedAt: {
        type: Date,
        default: Date.now
      }
    }],
    isActive: {
      type: Boolean,
      default: true
    },
    rules: [{
      type: String,
      trim: true
    }],
    announcements: [{
      title: String,
      content: String,
      postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      postedAt: {
        type: Date,
        default: Date.now
      }
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Club", ClubSchema);