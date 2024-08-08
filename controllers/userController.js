const user = require('../models/user');
const bcrypt = require('bcrypt');
const token = require('jsonwebtoken');


// async function getUsers(req, res) {
//     try{
//         const users = await user.find();
//         res.status(200).json(users);
//     }
//     catch(err){
//         res.status(400).json({message: err});
//     }
// }

// async function createUser(req, res) {
//         const { name,phone, password } = req.body;
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
//         try {
//             const user1 = new user({
//                 name,
//                 phone,
//                 password: hashedPassword
//             });
//             await user1.save();
//             return res.status(201).send(user1);
//         } catch (error) {
//             return res.status(500).send('Internal server error');
//         }
//     }

    
async function login(req, res) {
        try {
          const user1 = await user.findOne({ phone: req.body.phone });
          if (!user1) {
            return res.status(404).json({ msg: 'User not found' });
          }
      
          const validPassword = await bcrypt.compare(req.body.password, user1.password);
      
          if (!validPassword) {
            return res.status(400).json({ msg: 'Invalid password' });
          }
      
          const key=process.env.SECRET_KEY
          const tokens = token.sign(
            { userId: user1._id, isAdmin: user1.isAdmin },
            key,
            { expiresIn: '500h' }
          );
      
          res.status(200).json({ tokens, user1 });
      
        } catch (err) {
          console.error('Error in login controller:', err);
          res.status(500).send('Internal server error');
        }
      }


module.exports = {
    // getUsers,
    // createUser,
    login
}