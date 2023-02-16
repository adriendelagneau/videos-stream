import mongoose from 'mongoose';
const defaultImageSrc = "https://res.cloudinary.com/dos8mey8r/image/upload/v1675373434/cx2ma7urjjatqwfch7zt.png"

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    img: { type: String, required: true, default: defaultImageSrc },
    followers : [{ type: String }]
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;