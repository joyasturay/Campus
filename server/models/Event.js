const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: {
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
    club: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club"
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    eventDate: {
      type: Date,
      required: true
    },
    venue: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      enum: ['technical', 'cultural', 'sports', 'workshop', 'seminar', 'other'],
      default: 'other'
    },
    capacity: {
      type: Number,
      required: true
    },
    registrationDeadline: {
      type: Date,
      required: true
    },
    passes: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      passType: {
        type: String,
        enum: ['regular', 'vip'],
        default: 'regular'
      },
      status: {
        type: String,
        enum: ['booked', 'confirmed', 'cancelled'],
        default: 'booked'
      },
      bookedAt: {
        type: Date,
        default: Date.now
      }
    }],
    isActive: {
      type: Boolean,
      default: true
    },
    price: {
      type: Number,
      default: 0
    },
    images: [{
      type: String,
      trim: true
    }],
    schedule: [{
      time: Date,
      activity: String
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);