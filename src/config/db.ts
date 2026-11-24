import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME || "mentorlagbe";

if (!uri) {
  throw new Error("MONGODB_URI is missing in .env");
}

const client = new MongoClient(uri);

let database: Db | null = null;

export const connectDB = async (): Promise<Db> => {
  if (database) {
    return database;
  }

  await client.connect();

  database = client.db(dbName);

  await database.command({ ping: 1 });

  console.log("MongoDB Connected Successfully!");

  return database;
};

export const getDB = (): Db => {
  if (!database) {
    throw new Error("Database is not connected yet");
  }

  return database;
};