/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Noticia =  sequelize.define('Noticia', {
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
    fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ruta_foto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usuario_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id'
      }
    }
  }, {
    tableName: 'noticias'
  });

  return Noticia;
};
