const { restart } = require("nodemon");
const User = require("../models/user");

const userController = {
  async getAllUsers(req, res) {
    try {
      const allUsers = await User.find();
      res.json(allUsers);
    } catch (error) {
      console.log(error);
    }
  },
  async getSingleUser(req, res) {
    try {
      const singleUser = await User.findById(req.params.userId);
      res.json(singleUser);
    } catch (error) {
      console.log(error);
    }
  },

  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteUser(req, res) {
    try {
      const user = await user.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No such user exists" });
      }

      res.json({ message: "Student successfully deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
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
  async addFriend(req, res) {
    try {
      const newFriend = await User.findOneAndUpdate({ _id:req.params.userId }, { $addToSet:{ friends: req.params.friendId } }, { new: true } );
      res.json(newFriend);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteFriend(req, res) {
    try {
      const user = await user.findOneAndUpdate({ _id: req.params.userId }, { $pull:{ friends: req.params.friendId } }, { new: true } );

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