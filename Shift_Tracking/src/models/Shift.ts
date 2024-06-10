

import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Shift extends Model {
  public id!: number;
  public startTime!: Date;
  public endTime!: Date;
  public actualHours!: number;

 
  public static initializeModel(): void {
    Shift.init(
      {
        startTime: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        endTime: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        actualHours: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Shift",
      }
    );
  }
}

Shift.initializeModel();

export default Shift;
