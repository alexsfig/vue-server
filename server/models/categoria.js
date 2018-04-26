/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Categoria = sequelize.define('Categoria', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion_categoria: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    edad_max: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    edad_min: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    nombre_categoria: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sexo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'categoria'
  });
  Categoria.findCategoria = () =>
  {
      return sequelize.query(
          "select *, (select count(*) from ranking where categoria_id = cat.id ) atletas from categoria cat",
          {
            type: sequelize.QueryTypes.SELECT
          }
      );
  };

  Categoria.associate = (models) => {
    Categoria.hasMany(models.Ranking,
    {
        foreignKey: 'categoria_id',
        as: 'ranking'
    });
  };

  return Categoria;
};
