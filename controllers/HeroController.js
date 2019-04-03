import Hero from "../models/Hero";
import Message from "../models/Message";
// import { rejects } from "assets";

let SQLite = require("react-native-sqlite-storage");
let db = SQLite.openDatabase(
  { name: "hero-db", createFromLocation: "~sqlite.db", location: "Library" },
  this.openCB,
  this.errorCB
);
export const createHero = (hero: Hero) => {
  return new Promise((resolve, rejects) => {
    let msg = new Message();
    if (!hero) {
      msg.result = false;
      msg.message = "Invalid";
      resolve({ result: msg.result, message: msg.message });
    }

    db.transaction(tx => {
      tx.executeSql(
        "INSERT INTO pet (name) VALUES (?)",
        [hero.heroName],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            msg.result = true;
            msg.message = "Create new hero successfully!";
          } else {
            msg.result = false;
            msg.message = "Create new hero failed!";
          }
          resolve({ result: msg.result, message: msg.message });
        },
        error => {
          msg.result = false;
          msg.message = `${error.message}`;
          rejects({ result: msg.result, message: msg.message });
        }
      );
    });
  });
};

export function getAllHeroes() {
  let msg = new Message();
  return new Promise((resolve, rejects) => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM pet",
        [],
        (tx, results) => {
          msg.message = "All heroes are here.";
          resolve({ result: results.rows, message: msg.message });
        },
        error => {
          msg.result = false;
          msg.message = `${error.message}`;
          rejects({ result: msg.result, message: msg.message });
        }
      );
    });
  });
}

export function checkIfHeroExists() {}

export const updateHero = (hero: Hero) => {
  return new Promise((resolve, rejects) => {
    let msg = new Message();
    if (!hero) {
      msg.result = false;
      msg.message = "Invalid";
      resolve({ result: msg.result, message: msg.message });
    }
    db.transaction(tx => {
      tx.executeSql(
        "UPDATE pet SET name=? WHERE id=?",
        [hero.heroName, hero.heroId],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            msg.result = true;
            msg.message = "Update new hero successfully!";
          } else {
            msg.result = false;
            msg.message = "Update new hero failed!";
          }
          resolve({ result: msg.result, message: msg.message });
        },
        error => {
          msg.result = false;
          msg.message = `${error.message}`;
          rejects({ result: msg.result, message: msg.message });
        }
      );
    });
  });
};

export const deleteHero = () => {};
