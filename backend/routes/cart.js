const express = require("express");
const Cart = require("../models/cart");

const router = express.Router();

router.get("/cartinfo", (req, res, next) => {
    Cart.find({}).then(cart => {
        if(cart) {
            res.status(200).json(cart);
        } else{
            res.status(404).json({ message: "No items found" });
        }
    });
});

router.get("/cartinfo2/:pname", (req,res) => {
    var string = req.params.pname;
    var regex = new RegExp(["^", string, "$"].join(""), "i");
    Cart.find({"pname": regex}).then(cart => {
        if(cart){
            res.status(200).json(cart);
   
        }
        else{
            res.status(404).json({
                message: "not found"
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Could not add items to the cart, Is a patient selected?"
    });
    });
});

router.post('/additem', (req, res) => {
    const newitem = new Cart({
        checkoutdate: req.body.checkoutdate,
        Drugs:   req.body.Drugs,
        Price:   req.body.Price,
        Class:   req.body.Class,
        pname:   req.body.pname,
        qty:     req.body.qty,
        dose:    req.body.dose
    });
    newitem.save()
        .then(result => {
            res.status(200).json({
                message: 'Added successfully',
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                message: "Could not add items to the cart" + err
            });
        });
});

router.delete("/:id", (req, res, next) => {
    Cart.deleteMany({ "Drugs": req.params.id }).then(result => {
      res.status(200).json({ message: "cart deleted!" });
    });
  });

  router.delete("/patient/:name", (req, res, next) => {
    console.log("this " + req.body.name);
    Cart.deleteMany({ "pname": req.params.name }).then(result => {
      console.log(result);
      res.status(200).json({ message: "cart deleted!" });
    });
  });
  

 router.delete("/delete", (req, res, next) => {
    Cart.deleteMany({}).then(result => {
      res.status(200).json({ message: "cart deleted!" });
    });
  });

module.exports = router;