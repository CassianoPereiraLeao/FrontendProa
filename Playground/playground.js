import "../src/database";
import Customer from "../src/app/Models/CustomerModel";
import ContactModel from "../src/app/Models/ContactModel";

import { Op } from "sequelize";

class Playground {
    static async playIndex() {
        const customers = await Customer.findAll({
            attributes: { exclude: ["status", "id"] },
            include: [{
                model: ContactModel,
                where: {
                    status: "ACTIVE"
                },
                required: false
            }],
            where: {
                status: {
                    [Op.eq]: "ACTIVE"
                }
            },
            order: [["name"]],
            limit: 10,
            offset: 10 * 1 - 10,
        });

        console.log(JSON.stringify(customers, null, 2));
    }

    static async playShow(id) {
        const customer = await Customer.findOne({
            where: {
                id,
            },
            attributes: { exclude: ["status", "id" ] }
        });
        
        console.log(JSON.stringify(customer, null, 2));
    }

    static async playCreate() {
        const customer = await Customer.create({
            name: "Jab",
            email: "Jab@gmail.com"
        });

        console.log(JSON.stringify(customer, null, 2));
    }
}

Playground.playIndex();
Playground.playShow(1);
Playground.playCreate();
