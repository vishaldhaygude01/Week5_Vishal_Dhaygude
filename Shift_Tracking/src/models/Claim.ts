
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import Employee from "./Employee";

class Claims extends Model {
  public id!: string;
  public key!: string;
  public value!: string;
  public employeeId!: string;


  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Claims.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "claims",
  }
);


Claims.belongsTo(Employee, { foreignKey: "employeeId" });
Employee.hasMany(Claims, { foreignKey: "employeeId" });

export default Claims;
