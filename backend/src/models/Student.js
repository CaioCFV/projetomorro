const { Model, DataTypes } = require("sequelize");

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        cpf: DataTypes.STRING,
        phone: DataTypes.STRING,
        celphone: DataTypes.STRING,
        cep: DataTypes.STRING,
        renda_familiar: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "student",
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Course, {
      foreignKey: "id_student",
      otherKey: "id_course",
      through: "registration",
      as: "course",
    });
  }
}

module.exports = Student;
