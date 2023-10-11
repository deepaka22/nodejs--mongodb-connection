import express from "express";
import { client } from "./db.js";
// import { dbconnection } from "./db.js";

const app = express();

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Server started in local host ${PORT}`);
});

app.get("/", (req, resp) => {
  resp.send("working correctly");
});

app.get("/students/all", async (req, resp) => {
  try {
    const students = await client
      .db("zenclass")
      .collection("usersInfo")
      .find()
      .toArray();

    if (!students) {
      return resp.status(400).json({ message: "No data available" });
    }

    resp.status(200).json({ students_data: students });
  } catch (error) {
    resp.status(500).json({ message: "internal server error" });
  }
});
