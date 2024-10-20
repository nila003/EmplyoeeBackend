var express = require("express");
const router= express.Router();
const employeeModel=require("../model/employeeModel");
router.use(express.json());
router.post("/add",async(req,res)=>{
    try{
        var item = req.body;
        var data = new employeeModel(item);
        await data.save();
        res.status(200).send("Data added successfully");
    }catch(error){
        res.status(404).send("Unable to send data");
    }
});

router.get("/get", async (req, res) => {
    try {
      var data = await employeeModel.find();
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send("unable to send");
    }
  });

  router.get("/get/:a", async (req, res) => {
    try {
      console.log(req.params.a);
      var data = await employeeModel.findById(req.params.a);
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send("unable to send");
    }
  });

  router.delete("/remove/:a", async (req, res) => {
    try {
      console.log(req.params.a);
      await employeeModel.findByIdAndDelete(req.params.a);
      res.status(200).send("Deleted successfully");
    } catch (error) {
      res.status(404).send("unable to delete");
    }
  });

  router.put("/edit/:id", async (req, res) => {
    try {
      await employeeModel.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send("Updated successfully");
    } catch (error) {
      res.status(404).send("unable to update");
    }
  });



module.exports=router;