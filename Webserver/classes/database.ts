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
    db.serialize(() => {
      db.all('SELECT * FROM tblProfiles', (error: any, row: any) => {
        if(error) {
          console.log(error);
        } else {
          console.log(row);
        }
      });
      db.run(`INSERT INTO tblProfiles (nKey, szName, nPassword, szPicType, szEmail, nExperience, PicPath, LanguageLink, szSecret)
      VALUES (2, 'Fabi', 'aadsfasdfasdfewrwdfwdvadznharzdlkfj', '.jpg', 'f@f.com', 10, 'pic', 1, 'hdfsdfhjklasdfhjkl')`,(error: any) => {
        if(error){
          console.error(error);
        }
      });
    });
  }
}