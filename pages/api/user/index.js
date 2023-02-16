import dbConnect from "../../../utils/mongo";
import User from "../../../models/User";


  dbConnect();
  export default async function handler  (req, res) {
    switch(req.method){
        case "GET":
            await getUsers(req, res)
            break;
        case "POST":
            await createUser(req, res)
            break;       
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        
        res.json({
            status: 'success',
            result: users.length,
            users
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const createUser = async (req, res) => {
    try {
    const { name, email } = req.body;

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    //await db.disconnect();
    return;
  }
    
  const newUser = new User({
    name,
    email,
  });
        const user = await newUser.save();
        res.status(201).send(user)
        
    }catch (err) {
        res.status(500).json(err);
    }
}