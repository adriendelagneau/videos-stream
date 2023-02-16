import User from '../../../models/User';
import dbConnect from '../../../utils/mongo'

const handler = async (req, res) => {

  const {
    method,
    query: { email },
  } = req;

  await dbConnect();

  if (method === "POST") {
    try {
      const user = await User.find(email);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json("not found");
    }
  }
 
};

export default handler;