const mongoose = require('mongoose')

const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}${process.env.MONGO_OPTIONS}`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } }

async function run() {
  try {
    await mongoose.connect(mongoURI, clientOptions)
    await mongoose.connection.db.admin().command({ ping: 1 })
    console.log("Pinged your deployment. You successfully connected to MongoDB!")
  } finally {
    await mongoose.disconnect()
  }
}

run().catch(console.dir)