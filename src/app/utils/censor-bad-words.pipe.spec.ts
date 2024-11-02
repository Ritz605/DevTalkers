import { CensorBadWordsPipe } from './censor-bad-words.pipe';

describe('CensorBadWordsPipe', () => {
  it('create an instance', () => {
    const pipe = new CensorBadWordsPipe();
    expect(pipe).toBeTruthy();
  });
});
