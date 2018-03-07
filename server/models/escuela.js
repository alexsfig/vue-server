/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('escuela', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fundacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    entrenador_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'entrenador',
        key: 'id'
      }
    },
    playa_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'playa',
        key: 'id'
      }
    },
    celular: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    representante: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    telefono_fijo: {
      type: DataTypes.STRING(140),
      allowNull: true
    }
  }, {
    tableName: 'escuela'
  });
};
