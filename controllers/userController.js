const { restart } = require("nodemon");
const User = require("../models/user");

// Get all users
const userController = {
  async getAllUsers(req, res) {
    try {
      const allUsers = await User.find();
      res.json(allUsers);
    } catch (error) {
      console.log(error);
    }
  },
  // Get single user
  async getSingleUser(req, res) {
    try {
      const singleUser = await User.findById(req.params.userId);
      res.json(singleUser);
    } catch (error) {
      console.log(error);
    }
  },
  // Create a user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (error) {
      console.log(error);
    }
  },
  // Delete a user
  async deleteUser(req, res) {
    try {
      const user = await user.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No such user exists" });
      }

      res.json({ message: "User successfully deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Update a user
  async updateUser(req, res) {
    try {
      const updateTheUser = await User.findOneAndUpdate(
        {
          _id: req.params.userId,
        },
        {
          $set: req.body,
        },
        {
          new: true,
          runValidators: true,
        }
      );
      res.json(updateTheUser);
    } catch (error) {
      console.log(error);
    }
  },
  // Add a friend
  async addFriend(req, res) {
    try {
      const newFriend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
      res.json(newFriend);
    } catch (error) {
      console.log(error);
    }
  },
  // Detele a friend
  async deleteFriend(req, res) {
    try {
      const user = await user.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No such user exists" });
      }

      res.json({ message: "Friend successfully deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
