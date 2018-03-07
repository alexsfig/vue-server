/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('circuito', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    categoria_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'id'
      }
    },
    fecha_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'fecha',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Abierta'
    }
  }, {
    tableName: 'circuito'
  });
};
