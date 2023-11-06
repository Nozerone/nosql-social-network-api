const { restart } = require("nodemon");
const Thought = require("../models/thought");

const thoughtControllers = {
  //Get all thoughts
  async getAllThoughts(req, res) {
    try {
      const allThoughts = await Thought.find();
      res.json(allThoughts);
    } catch (error) {
      console.log(error);
    }
  },
  async getSingleThought(req, res) {
    try {
      const singleThought = await Thought.findById(req.params.userId);
      res.json(singleThought);
    } catch (error) {
      console.log(error);
    }
  },
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      res.json(newThought);
    } catch (error) {
      console.log(error);
    }
  },
  // Delete a thought ***Check on this one***
  async deleteThought(req, res) {
    try {
      const thought = await thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      await Thought.deleteMany({ _id: { $in: hought.users } });
      res.json({ message: "Thoughts deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateThought(req, res) {
    try {
      const updateTheThought = await Thought.findOneAndUpdate(
        {
          _id: req.params.thoughtId,
        },
        {
          $set: req.body,
        },
        {
          new: true,
          runValidators: true,
        }
      );
      res.json(updateTheThought);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = thoughtControllers;