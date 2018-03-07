/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bitacora', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    app_usuario: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    db_usuario: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha_modificaion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    host: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    operacion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usuario_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    }
  }, {
    tableName: 'bitacora'
  });
};
