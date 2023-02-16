import dbConnect from "../../../utils/mongo";
import Post from '../../../models/Post';


dbConnect();

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '10mb',
      },
    },
  }

export default async function handler  (req, res) {
    switch(req.method){
        case "GET":
            await getPosts(req, res)
            break;
        case "POST":
            await createPost(req, res)
            break;       
    }
}


class APIfeatures {
  constructor(query, queryString){
      this.query = query;
      this.queryString = queryString;
  }
  filtering(){
      const queryObj = {...this.queryString}
     // const excludeFields = ['page', 'sort', 'limit']
      // excludeFields.forEach(el => delete(queryObj[el]))
      
      if(queryObj.topic !== 'all')
        this.query.find({ topic: queryObj.topic })
    
         
    if (queryObj.title !== 'all')
      this.query.find({ caption: { '$regex' : queryObj.title, '$options' : 'i' } })
    // {$regex : "son"}



      this.query.find()
      return this;
  }
}




const getPosts = async (req, res) => {

    try {
      const features = new APIfeatures(Post.find(), req.query)
      .filtering()

      const posts = await features.query
      
      res.json({
          status: 'success',
          result: posts.length,
          posts
      })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const createPost = async (req, res) => {
 console.log(req.body.imgSrc)
    try {
        const newPost = new Post({
          caption: req.body.caption,
            videoSrc: req.body.videoSrc,
          imgSrc: req.body.imgSrc,
            postBy: req.body.postBy,
          postByUsername: req.body.postByUsername,
          topic: req.body.topic,
          postByImg: req.body.postByImg
        });
        
        const post = await newPost.save();
        res.status(201).send(post)
    } catch (err) {
        console.log(err)
    }
        
  
}