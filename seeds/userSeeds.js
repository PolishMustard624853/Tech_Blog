const { User } = require('../models');

const userData = [
    {
        username: "C-kelly",
        github: "C-Kelly",
        email: "ratKing@gmail.com",
        password: "password1"
    },
    {
        username: "D-Reynolds",
        github: "D-Reynolds",
        email: "D-Reynolds@gmail.com",
        password: "password2"
    },
    {
        username: "RonMac",
        github: "MacNcheese",
        email: "RonMac@gmail.com",
        password: "password3"
    },
    {
        username: "Frank",
        github: "FrankReynolds",
        email: "Trashman@gmail.com",
        password: "password4"
    },
    {
        username: "Deeondra",
        github: "sweetDee",
        email: "SweetDee@gmail.com",
        password: "password5"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;