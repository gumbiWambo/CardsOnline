const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database/cardsOnline.db', (error: any) => {
  if (error) {
    console.error('Database not connected');
  }
});
let database: Database
export class Database {
  public static getInstance() {
    if(!database) {
      database = new Database();
    }
    return database;
  }
  getPlayer() {
    db.all('SELECT * FROM tblProfiles', (error: any, row: any) => {
      if(error) {
        console.log(error);
      } else {
        console.log(row);
      }
    });
  }
}