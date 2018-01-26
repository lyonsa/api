export default (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  })

  Post.associate = models => {
    Post.hasMany(models.PostTag, {
      foreignKey: 'postId',
      as: 'tags',
    })
    Post.hasMany(models.Comment, {
      foreignKey: 'postId',
      as: 'comments',
    })
    Post.belongsTo(models.Brewery, {
      foreignKey: 'breweryId',
      as: 'brewery',
      allowNull: true,
    })
  }

  return Post
}
