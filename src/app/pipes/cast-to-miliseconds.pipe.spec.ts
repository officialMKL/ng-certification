import { CastToMilisecondsPipe } from './cast-to-miliseconds.pipe';

describe('CastToMilisecondsPipe', () => {
  it('create an instance', () => {
    const pipe = new CastToMilisecondsPipe();
    expect(pipe).toBeTruthy();
  });
});
