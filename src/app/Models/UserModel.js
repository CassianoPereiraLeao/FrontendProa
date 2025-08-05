import Sequelize, { Model } from "sequelize";

class UserModel extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING
        }, {
            sequelize,
            modelName: "User",
            tableName: "users"
        })
    }
}

export default UserModel;