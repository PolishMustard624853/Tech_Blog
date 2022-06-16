const { Post } = require('../models');

const postData = [
    {
        title: "Spin Doctors mix RELEASED",
        post_content: "Okay, Mr. Mayor. Feast your ears on that Spin Doctors mix.",
        user_id: 3
    },
    {
        title: "Charlie Taked Baby",
        post_content: "[Reading a note from Charlie] Taked baby. Meet at later bar, night or day sometime.",
        user_id: 1
    },
    {
        title: "Charlie is broke",
        post_content: " Oh, look at me! The millionaire who goes to see doctors!",
        user_id: 2

    },
    {
        title: "Dee Gets a New Job",
        post_content: "I’m not asking you to do much. Just turn a blind eye while I rob this place stupid.",
        user_id: 5
    },
    {
        title: "A Lawyer, Charlie is",
        post_content: "Then, I’ll just regress, because I feel I made myself perfectly redundant.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;