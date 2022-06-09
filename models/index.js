const User = require('./User');
const Blog = require('./Blog');
const Post = require('./Post')

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User);
Match.hasMany(Blog, {
  foreignKey: 'blog_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blog };
