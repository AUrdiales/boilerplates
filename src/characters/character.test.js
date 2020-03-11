import { getAllCharacters } from './characters.service';

describe('Character tests', () => {
    it('should return the correct data', async () => {
        expect(await getAllCharacters()).toStrictEqual({ data: 'data' });
    });
});
