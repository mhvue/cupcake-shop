import express from "express";
import { Order } from "../../Entites/Order";

const router = express.Router();

//get route to display all the cupcake images, cupcake info, cupcake info and price 
router.get("/api/cupcakeInfo", (req,res) => {
    res.send("we will have show cupcake inforamtion here")

});

//when a customer to add cupcake to cart
//want to post the cupcake name, price to Orders db and associate to customer

router.post("/api/cart", async (req,res) => {
    const {
        customerName,
        total
    } = req.body

    const order = Order.create({
        customerName: customerName,
        total: total
    });

    await order.save();

    return res.json(order)

})

export {
    router as createClientRouter
}