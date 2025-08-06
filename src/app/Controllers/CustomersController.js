import Customer from "../Models/CustomerModel"

class CustomersController {
    async index (req, res) {
        console.log(Customer);
        var data = await Customer.findAll({
            limit: 20
        });

        return res.json(data);
    }

    async show(req, res) {
        var id =  parseInt(req.query.id);
        var customer = Customer.findByPk(id);

        return await res.json(customer);
    }

    async create(req, res) {
        var { name, email } = req.body;

        var customer = await Customer.create({
            name,
            email
        });

        return await res.json(customer);
    }

    update(req, res) {
        return res.json("Ainda não implementado");
    }

    delete(req, res) {

    }
}

export default new CustomersController();