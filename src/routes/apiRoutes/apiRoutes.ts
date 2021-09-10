import express from "express";
import { Customer } from "../../Entites/Customer";
import { Order } from "../../Entites/Order";

const router = express.Router();

//get route to display all the cupcake images, cupcake info, cupcake info and price 
router.get("/api/cupcakeInfo", (req,res) => {
    res.send("we will have show cupcake inforamtion here")

});

//create a customer
router.post("/api/customer", async (req,res) => {
    const {
        firstName,
        lastName,
        email,
    } = req.body;

    const customer = Customer.create({
        firstName: firstName,
        lastName: lastName,
        email: email
    });

    await customer.save()
    return res.json({
        msg: "customer created!"
    });

})

//when a customer to makes an order, we see the customer name, total and it's id from customer id column
router.post("/api/customer/:customerId/order", async (req,res) => {
    const { customerId } = req.params;
    const {
        customerName,
        total
    } = req.body

    //we need to find the customer first by looking for the customer id
    const customer = await Customer.findOne(parseInt(customerId));

    //if we DO NOT have the customer
    if(!customer){
        return res.json({
            msg: "customer not found"
        })
    }

    const order = Order.create({
        customerName: customerName,
        total: total,
        customers: customer
    });

    await order.save();

    return res.json(order)

});

//delete a customer 
//when we delete customer, we delete all the orders as well via cascade in entities
router.delete("/api/customer/:customerId", async (req,res) => {
    //get the customer by getting the customer id
    const { customerId } = req.params;

    const response = await Customer.delete(parseInt(customerId));

    return res.json(response)
})

//delete an order only

export {
    router as createClientRouter
}