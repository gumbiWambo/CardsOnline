export class Authentication {
  private registerSessions = [];
  private loginSessions = [];
  public static generateRandomString(): string {
    let randomString = '';
    const limit = 100 + Math.random() * 1000;
    for(let i = 0; i <= limit; ++i) {
      randomString += String.fromCharCode(Math.random() * 10000);
    }
    return randomString;
  }
}