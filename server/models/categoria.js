/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoria', {
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
};
