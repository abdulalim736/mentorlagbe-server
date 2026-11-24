import { getDB } from "./db.js";

import type {
  IUser,
  ITuition,
  IApplication,
  IPayment
} from "../types/database.js";

export const getCollections = () => {
  const db = getDB();

  return {
    users: db.collection<IUser>("users"),

    tuitions: db.collection<ITuition>("tuitions"),

    applications: db.collection<IApplication>("applications"),

    payments: db.collection<IPayment>("payments"),
  };
};