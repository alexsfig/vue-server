/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const AtletasCircuito =  sequelize.define('AtletasCircuito', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    estado: {
      type: DataTypes.INTEGER(6),
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
    circuito_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'circuito',
        key: 'id'
      }
    },
    posicion: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    puntos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  }, {
    tableName: 'atletas_circuito'
  });
  AtletasCircuito.associate = (models) => {
    AtletasCircuito.belongsTo(models.Atleta,
      {
          foreignKey: 'atleta_id',
          as: 'atleta'
      }
    );
    AtletasCircuito.belongsTo(models.Circuito,
      {
          foreignKey: 'circuito_id',
          as: 'circuito'
      }
    );
  };
  return AtletasCircuito;
};
