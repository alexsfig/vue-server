/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Persona = sequelize.define('Persona', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    apellido: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dui: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sexo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    atleta_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'atleta',
        key: 'id'
      },
      unique: true
    },
    entrenador_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'entrenador',
        key: 'id'
      },
      unique: true
    },
    juez_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'juez',
        key: 'id'
      },
      unique: true
    },
    miembro_junta_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'miembro_junta',
        key: 'id'
      },
      unique: true
    }
  }, {
    tableName: 'persona'
  });
  return Persona;
};
