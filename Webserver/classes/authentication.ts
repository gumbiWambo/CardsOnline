let authentication: Authentication;
export class Authentication {
  private registerSessions: Array<string> = [];
  private loginSessions = [];
  public static getInstace(): Authentication {
    if (!authentication) {
      authentication = new Authentication();
    }
    return authentication;
  }
  public createRegisterSession(): string {
    const key = this.generateRandomString();
    this.registerSessions.push(key);
    return key;
  }
  public validateRegisterSessionKey(key: string): boolean {
    return !!this.registerSessions.find((x) => x === key);
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