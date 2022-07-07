const User = require('./User');
const Post = require('./Post');
const Blog = require('./Blog');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
  
User.hasMany(Blog, {
    foreignKey: 'user_id'
});
  
Post.hasMany(Blog, {
    foreignKey: 'post_id'
});

module.exports = {User, Post, Blog};