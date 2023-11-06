const { Schema, model } = require("mongoose");

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
        
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            reactionSchema
        ]
    },
    {
        timestamps,
        toJSON: {
            virtuals: true
        },
        id: false,
    }
);

const Thought = model("Thought", thoughtsSchema);
module.exports = Thought