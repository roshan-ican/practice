const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
  sellerId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["seller"],
    default: "seller",
  },
  properties: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Property', // Reference to the Property schema
    }
  ],
});

export const SellerModel = mongoose.model('Seller', SellerSchema);
