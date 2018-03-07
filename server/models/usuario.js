/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    contrasena: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usuario: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usuario_activo: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    persona_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'persona',
        key: 'id'
      }
    },
    rol_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'rol',
        key: 'id'
      }
    }
  }, {
    tableName: 'usuario'
  });
};
