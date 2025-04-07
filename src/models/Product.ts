import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  downloadUrl: {
    type: String,
    required: true,
  },
  maxDownloads: {
    type: Number,
    default: 5,
  },
  category: {
    type: String,
    required: true,
  },
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Product || mongoose.model('Product', productSchema) 