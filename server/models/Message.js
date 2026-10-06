import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 150 },
    subject: { type: String, trim: true, maxlength: 150, default: '' },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
    ip: { type: String },
    emailStatus: {
      type: String,
      enum: ['sent', 'failed'],
      default: 'sent',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Message', messageSchema);
