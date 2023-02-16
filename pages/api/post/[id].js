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
            await getPost(req, res)
            break;
    
    }
}

const getPost = async (req, res) => {

    const { id } = req.query;
    try {
        const post = await Post.findById(id)
        
        res.status(200).json({
            status: 'success',
            post
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

