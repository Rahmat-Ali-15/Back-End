const mongoose = require("mongoose");

const main = async () => {
  try {
    const connect = mongoose.connect("mongodb://127.0.0.1:27017/my_db");

    console.log("DB is connected");

    let userData = new mainModel({
      name: "rahmat",
      age: 21,
      married: false,
    });

    await userData.save();
    let value = await mainModel.find()
    console.log("🚀 ~ userData:", value);


    console.log("Data has been successfully added");

    (await connect).disconnect();

    console.log("DB is Disconnected ❌");
  } catch (error) {
    console.log("DB Conncetion Failed❗");
    console.log("🚀 ~ error:", error);
  }
};

const mainModel = new mongoose.model(
  "data",
  new mongoose.Schema(
    {
      name: String,
      age: Number,
      married: Boolean,
    },
    {
      versionKey: false,
    },
  ),
);

main();
