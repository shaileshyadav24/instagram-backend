const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.updateProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password'); // Exclude password
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { name, email } = req.body;
     // Update user data
     user.name = name || user.name;
     user.email = email || user.email;
    //  user.profilePicture = req.body.profilePicture || user.profilePicture;
     await user.save();
 
     res.status(200).json(user);

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

