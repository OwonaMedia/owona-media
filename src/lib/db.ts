import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.production'
  )
}

let isConnected = false

export async function connectDB() {
  if (isConnected) {
    return
  }

  try {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.connect(MONGODB_URI, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        connectTimeoutMS: 10000,
        maxPoolSize: 10,
        minPoolSize: 5,
        retryWrites: true,
        w: 'majority',
        appName: 'Cluster0'
      })
      isConnected = true
      console.log('MongoDB connected successfully')
    } else {
      console.log('Skipping MongoDB connection in development/build')
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}

export { connectDB as default }

export async function dbConnect() {
  try {
    await connectDB()
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
} 