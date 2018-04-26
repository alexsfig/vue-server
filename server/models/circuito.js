/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Circuito =  sequelize.define('Circuito', {
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
  Circuito.associate = (models) => {
    Circuito.belongsTo(models.Fecha,
      {
          foreignKey: 'fecha_id',
          as: 'fecha'
      }
    );
    Circuito.belongsTo(models.Categoria,
      {
          foreignKey: 'categoria_id',
          as: 'categoria'
      }
    );
    Circuito.hasMany(models.AtletasCircuito,
    {
        foreignKey: 'circuito_id',
        as: 'atletas_circuito'
    });
  };
  return Circuito

};
