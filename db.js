import { MongoClient } from "mongodb";

const mongodbConnectString = "mongodb://127.0.0.1:27017/";

export const dbconnection = async () => {
  const client = new MongoClient(mongodbConnectString);
  await client.connect();
  console.log("db connected successfuly");
  console.log(client);
  return client;
};

export const client = await dbconnection();
