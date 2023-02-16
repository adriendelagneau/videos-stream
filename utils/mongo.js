import mongoose from 'mongoose'

module.exports = async () => {
  const connectionParams = {
    useNewUrlParser: true,
		useUnifiedTopology: true,
  }
  try {
    //mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_URI, connectionParams);
        console.log("Connected to database successfully")
    } catch (error) {
        console.log(error)
    }
}


