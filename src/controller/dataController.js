const Data = require("../model/tempSchema");
const dataController = {
  postData: async (req, res) => {
    const { temperature } = req.body;
    const newData = new Data({ temperature});
    try {
      await newData.save();
      res.status(201).send("Data stored successfully");
    } catch (error) {
      res.status(500).send("Error storing data: " + error.message);
    }
  },
  getData:async (req,res)=>{
    try {
        const data = await Data.find();
        res.json(data);
      } catch (error) {
        res.status(500).send('Error retrieving data: ' + error.message);
      }
  }
};
module.exports = dataController;