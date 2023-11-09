const { restart } = require("nodemon");
const Thought = require("../models/thought");
const User = require("../models/user");

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
  // Get single thought
  async getSingleThought(req, res) {
    try {
      const singleThought = await Thought.findById(req.params.thoughtId);
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
  // Delete a thought 
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId
      });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      await Thought.deleteMany({ _id: { $in: thought.users } });
      res.json({ message: "Thoughts deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
// Update a thought
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
// Add a reaction
  async addReaction(req, res) {
    try {
      const newReaction = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body.reactionId } },
        { new: true }
      );
      res.json(newReaction );
    } catch (error) {
      console.log(error);
    }
  },
  // Detele a Reaction 
  async deleteReaction (req, res) {
    try {
      const user = await Thought.findByIdAndUpdate(
        { _id: req.params.userId },
        { $pull: { reactions: req.params.reactionId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No such reaction exists" });
      }

      res.json({ message: "Reaction successfully deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = thoughtControllers;