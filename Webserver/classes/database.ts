
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
  getPlayer(username: string, password: string): any {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.all(`SELECT * FROM tblProfiles WHERE szName='${username}' and nPassword='${password}'`, (error: any, row: any) => {
          if(error) {
            console.log(error);
          } else {
            resolve(row);
          }
        });
      });
    });
  }
  insertProfile(name: string, password: string, email: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      if(!await this.checkNameAndEmail(name, email)){
        console.log(name, password, email);
        db.run(`INSERT INTO tblProfiles (szName, nPassword, szPicType, szEmail, nExperience, PicPath, LanguageLink, szSecret)
        VALUES ('${name}', '${password}', '.jpg', '${email}', 10, 'pic', 1, 'hdfsdfhjklasdfhjkl')`,(error: any) => {
          if(error){
            console.error(error);
            reject(!!error);
          }
          resolve(true);
        });
      } else {
        reject('Username or Email are in use!');
      }
    });
  }
  private checkNameAndEmail(name: string, email: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      db.all(`SELECT * FROM tblProfiles WHERE szName='${name}' or szEmail='${email}'`, (error: any, rows: Array<any>) => {
        if(error) {
          console.log(error);
          reject(error);
        } else {
          if(rows.length > 0) {
            resolve(true)
          }
          resolve(false);
        }
      });
    });
  }
}