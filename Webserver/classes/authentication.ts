import { Database } from "./database";

let authentication: Authentication;
export class Authentication {
  private registerSessions: Array<string> = [];
  private loginSessions: Array<string> = [];
  private database: Database = Database.getInstance();
  public static getInstace(): Authentication {
    if (!authentication) {
      authentication = new Authentication();
    }
    return authentication;
  }
  public createRegisterSession(): string {
    let key = this.generateRandomString();
    while(this.validateRegisterSessionKey(key)) {
      key = this.generateRandomString();
    }
    this.registerSessions.push(key);
    return key;
  }
  public createLoginSession(): string {
    let key = this.generateRandomString();
    while(this.validateLoginSessionKey(key)) {
      key = this.generateRandomString();
    }
    this.loginSessions.push(key);
    return key;
  }
  public validateLoginSessionKey(key: string): boolean {
    return !!this.loginSessions.find((x) => x === key);
  }
  public validateRegisterSessionKey(key: string): boolean {
    return !!this.registerSessions.find((x) => x === key);
  }
  public async loginPlayer(username: string, password: string): Promise<number> {
    const loginResult = await this.database.getPlayer(username, password);
    return loginResult[0].nKey;
  }
  public registerPlayer(username: string, password: string, email: string): Promise<boolean> {
    return this.database.insertProfile(username, password, email);
  }
  private generateRandomString(): string {
    let randomString = '';
    const limit = 100 + Math.random() * 898;
    for(let i = 0; i <= limit; ++i) {
      randomString += String.fromCharCode(Math.random() * 10000);
    }
    return randomString;
  }
}