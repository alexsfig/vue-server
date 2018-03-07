/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaccion', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comprobante: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    referencia: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    atleta_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'atleta',
        key: 'id'
      }
    },
    cuenta_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'cuenta',
        key: 'id'
      }
    },
    forma_pago_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'forma_pago',
        key: 'id'
      }
    },
    patrocinador_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'patrocinador',
        key: 'id'
      }
    },
    tipo_transaccion_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tipo_transaccion',
        key: 'id'
      }
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
    tableName: 'transaccion'
  });
};
