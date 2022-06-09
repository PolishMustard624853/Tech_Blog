const User = require('./User');
const Blog = require('./Blog');
const Post = require('./Post')

Blog.hasMany(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Blog, Post };
