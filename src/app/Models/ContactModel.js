import Sequelize, { Model } from "sequelize";

class ContactModel extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                status: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
                phone_nummber: Sequelize.STRING(11),
            },
            {
                sequelize,
                modelName: "Contact",
                tableName: "contacts",
                hooks: {
                    
                }
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Customer, { foreignKey: "customer_id" });
    }
}

export default ContactModel;
