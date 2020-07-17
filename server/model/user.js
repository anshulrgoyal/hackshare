const mongoose = require("mongoose");
const { string } = require("@hapi/joi");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
    },
    timeZone: {
      type: String,
    },
    countrCcode: {
      type: String,
    },
    expertMeeting: {
      type: Number,
      required: true,
      default: 0,
    },
    learnerMeeting: {
      type: Number,
      required: true,
      default: 0,
    },
    challenegesAdded: {
      type: Number,
      required: true,
      default: 0,
    },
    challengesComplete: {
      type: Number,
      required: true,
      default: 0,
    },
    auth0Ref: {
      type: String,
      required: true,
    },
    expertise: [
      {
        type: String,
      },
    ],
    learnings: [
      {
        type: String,
      },
    ],
    socialLink: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = userSchema;
