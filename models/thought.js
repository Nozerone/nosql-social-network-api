const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },

    reactions: [reactionSchema],
    
  },
  {

    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//virtual that retrieves the length of the thoughts's `reactions` array frield on query.

thoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;

});

const Thought = model("Thought", thoughtsSchema);

module.exports = Thought;
