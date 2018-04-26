/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Fecha = sequelize.define('Fecha', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    playa_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'playa',
        key: 'id'
      }
    }
  }, {
    tableName: 'fecha'
  });

  Fecha.associate = (models) => {
    Fecha.belongsTo(models.Playa,
    {
        foreignKey: 'playa_id',
        as: 'playa'
    });
    Fecha.hasMany(models.Circuito,
    {
        foreignKey: 'fecha_id',
        as: 'circuitos'
    });
  };
  return Fecha
};
