import mongoose from 'mongoose'

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Bitte geben Sie einen Titel ein'],
    maxlength: [100, 'Der Titel darf maximal 100 Zeichen lang sein']
  },
  content: {
    type: String,
    required: [true, 'Bitte geben Sie einen Inhalt ein']
  },
  author: {
    type: String,
    required: [true, 'Bitte geben Sie einen Autor ein']
  },
  image: {
    type: String,
    required: false
  },
  tags: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema) 