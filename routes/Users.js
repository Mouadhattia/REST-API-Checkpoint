const express = require("express");
const router = express.Router();
const User = require("../models/User")


// GET :  RETURN ALL USERS 
router.get("/", async (req, res) => {
    try {
        const result = await User.find()
        res.send({ response: result, message: "getting users " });
    } catch (error) {
        res.status(400).send({ message: "can not get users" });
    }
});
// POST :  ADD A NEW USER TO THE DATABASE 
router.post("/", async (req, res) => {
    try {
        const newUser = new User(req.body);
        const response = await newUser.save();
        res.send({ response: response, message: "user is saved" });
      } catch (error) {
        console.log(error);
        res.status(500).send({ message: "can not save it" });
      }
    });
    //PUT : EDIT A USER BY ID 
    router.put("/:id", async (req, res) => {
        try {
            const result = await User.updateOne({ _id: req.params.id }, { $set: { ...req.body } });
            result.nModified ? res.send({ message: "user updated" }) :
            res.send({ message: "mregel "});
            res.send({ response: result, message: "getting User " });
        } catch (error) {
            console.log(error)
        }
    });
    //DELETE : REMOVE A USER BY ID 
    router.delete("/:id", async (req, res) => {
        try {
            const result = await User.deleteOne({ _id: req.params.id });
            result.n ? res.send({ response: "user deleted" }) :
                res.send({message:"mregel"});
    
        } catch (error) {
            res.status(400).send({ message: "there is no User with this id" });
        }
    });
    
    



module.exports = router;