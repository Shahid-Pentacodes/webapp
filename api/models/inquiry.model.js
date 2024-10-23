import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    inquiry_type: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },

    subject: {
      type: String,
    },
    phone: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry;
