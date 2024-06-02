import mongoose from 'mongoose';

const subtodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    complete: {
      type: Boolean,
      default: false,
    },

    createdBy: {
      type: mongoose.Schema.ObejctId,
      ref: 'User',
    },
  },
  { Timestamps: true }
);

export const subtodo = mongoose.model('subtodo', subtodoSchema);
