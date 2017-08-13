module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'release_date'
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    synopsis: {
      type: DataTypes.TEXT('long')
    },
    genre: {
      type: DataTypes.STRING,
      get: function () {
        return this.getDataValue('genre').split(',');
      },
      set: function (genres) {
        this.setDataValue('genre', genres.join(','))
      }
    }
  });

  return movie;
}
