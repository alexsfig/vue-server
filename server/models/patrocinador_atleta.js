/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patrocinador_atleta', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tiempo_patrocinio: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    atleta_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'atleta',
        key: 'id'
      }
    },
    patrocinador_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'patrocinador',
        key: 'id'
      }
    }
  }, {
    tableName: 'patrocinador_atleta'
  });
};
