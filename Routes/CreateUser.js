const express = require("express");
const router = express.Router();
const Userdata = require("../Models/Userdata");

// POST endpoint for creating a new UserBlog entry
router.post("/createuser", async (req, res) => {
  try {
    await Userdata.create({
      name: req.body.name,
      email: req.body.email,
      mobileNumber: req.body.mobileNumber,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

// GET endpoint for fetching all UserBlog entries
router.get("/getuserdata", async (req, res) => {
  try {
    const data = await Userdata.find({});
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

router.get("/getuserdata/:getdataId", async (req, res) => { // Add :postId parameter in the route
    try {
      const dataId = req.params.getdataId; // Get postId from request parameters
      const data = await Userdata.findById(dataId); // Fetch data for the specific postId
      if (!data) {
        return res.status(404).json({ message: 'data not found' }); // Handle case when post is not found
      }
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error");
    }
  });


// PUT endpoint for updating a UserBlog entry
router.put("/updateuser/:id", async (req, res) => {
  try {
    const updateddata = await Userdata.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
      },
      { new: true }
    );
    res.json(updateddata);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// DELETE endpoint for deleting a UserBlog entry
router.delete("/deleteuserdata/:id", async (req, res) => {
  try {
    await Userdata.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
