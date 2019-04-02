import Hero from "../models/Hero";
import Message from "../models/Message";
import { rejects } from "assert";

let SQLite = require("react-native-sqlite-storage");
let sqlite = SQLite.openDatabase({
  name: "hero-db",
  createFromLocation: "~database/sqlite.db"
});

export const createHero = (hero: Hero) => {
  return new Promise((resolve, rejects) => {
    let msg = new Message();
    if (!hero) {
      msg.result = false;
      msg.message = "Invalid";
      resolve({ result: msg.result, message: msg.message });
    }

    sqlite.transaction(tx => {
      tx.executeSql(
        "INSERT INTO pet(name) VALUES (?)",
        [hero.heroName],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            msg.result = true;
            msg.message = "Created";
          } else {
            msg.result = false;
            msg.message = "Failed";
          }
          resolve({ result: msg.result, message: msg.message });
        },
        error => {
          msg.result = true;
          msg.message = `${error.message}`;
          resolve({ result: msg.result, message: msg.message });
        }
      );
    });
  });
};

export function getAllHeroes() {}

export function checkIfHeroExists() {}

export const updateHero = () => {};

export const deleteHero = () => {};
