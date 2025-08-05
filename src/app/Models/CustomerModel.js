import Sequelize, { Model } from "sequelize";

class CustomerModel extends Model {
    static init (sequelize) {
        super.init(
            {
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            status: Sequelize.ENUM('ACTIVE', 'ARCHIVED'),
        },
        {
            sequelize,
            modelName: "Customer",
            tableName: "customers"
        });
    }

    static associate(models) {
        this.hasMany(models.Contact);
    } 
}

export default CustomerModel;
