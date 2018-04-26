/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Atleta =   sequelize.define('Atleta', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    anios_practicando: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    compitio_fechas: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    cuantas_fechas: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    descripcion_lesion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    edad_inicio: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    idiomas: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lado_pie: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    logros: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nivel_academico: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ola_preferida: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    otros_estudios: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    playa_practica: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ruta_foto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rutina_constancia: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sabe_escribir: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    sabe_firmar: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    sabe_leer: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    tiene_lesion: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    u_anio_cursado: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ultima_participacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    club_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'club',
        key: 'id'
      }
    },
    escuela_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'escuela',
        key: 'id'
      }
    }
  }, {
    tableName: 'atleta'
  });

  Atleta.associate = (models) => {
        Atleta.hasOne(models.Persona,
        {
            foreignKey: 'atleta_id',
            as: 'persona'
        });
        Atleta.hasMany(models.Ranking,
        {
            foreignKey: 'atleta_id',
            as: 'ranking'
        });
        Atleta.hasMany(models.AtletasCircuito,
        {
            foreignKey: 'atleta_id',
            as: 'atletaCircuito'
        });
  };


  return Atleta;
};
