import mongoose, { Schema } from 'mongoose';

const likeSchema = new mongoose.Schema({

})

const postSchema = new mongoose.Schema(
  {
    caption: { type: String, required: true },
    videoSrc: { type: String, required: true },
    imgSrc: { type: String, required: true},
    postBy: { type: String, required: true },
    postByUsername: { type: String, required: true },
    postByImg: { type: String, required: true },
    topic: { type: String, required: true },
    likes: [ {type: String}]

  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export default Post;