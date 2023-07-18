const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: Schema.Types.ObjectId, ref:'Account'
    },
    upvotes: [{
        type: Schema.Types.ObjectId, ref:'Account',
        default: 0,
    }],
    downvotes: [{type: Schema.Types.ObjectId, ref:'Account',
        default: 0,
    }],
    date: {
        type: Date,
        default: () => Date.now(),
    },
    dateModified: Date,
    replies: [commentSchema]
})
const postSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
        min: 1,
        max: 50,
    },
    description: {
        type: String,
        required: true,
        min: 1,
    },
    date: {
        type: Date,
        default: () => Date.now(),
    },
    dateModified: Date,
    upvotes: [{
        type: Schema.Types.ObjectId, ref:'Account',
        default: 0,
    }],
    downvotes: [{type: Schema.Types.ObjectId, ref:'Account',
        default: 0,
    }],
    comments:[commentSchema]

})

module.exports = mongoose.model('Post', postSchema);