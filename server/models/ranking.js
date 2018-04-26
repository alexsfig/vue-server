/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Ranking = sequelize.define('Ranking', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    anio: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    puntuacion: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },

    lugar: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    
    atleta_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'atleta',
        key: 'id'
      }
    },
    categoria_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'id'
      }
    }
  }, {
    tableName: 'ranking'
  });

  Ranking.associate = (models) => {
    Ranking.belongsTo(models.Atleta,
    {
        foreignKey: 'atleta_id',
        as: 'atleta'
    });

  };

  return  Ranking;
};
