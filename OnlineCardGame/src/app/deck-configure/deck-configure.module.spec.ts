import { DeckConfigureModule } from './deck-configure.module';

describe('DeckConfigureModule', () => {
  let deckConfigureModule: DeckConfigureModule;

  beforeEach(() => {
    deckConfigureModule = new DeckConfigureModule();
  });

  it('should create an instance', () => {
    expect(deckConfigureModule).toBeTruthy();
  });
});
