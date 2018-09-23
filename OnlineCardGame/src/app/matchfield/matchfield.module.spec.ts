import { MatchfieldModule } from './matchfield.module';

describe('MatchfieldModule', () => {
  let matchfieldModule: MatchfieldModule;

  beforeEach(() => {
    matchfieldModule = new MatchfieldModule();
  });

  it('should create an instance', () => {
    expect(matchfieldModule).toBeTruthy();
  });
});
