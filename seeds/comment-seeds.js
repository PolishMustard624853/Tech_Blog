const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Nice Seeds"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Fur Sure"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Super Duper"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We surpassed ONE SINGLE SUBSCRIBER"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Good Stuff"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "The long awaited realease of Paddy's Coin is finally here"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "I made so much money with Paddy's Coin"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Get Paddy's Coin"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;