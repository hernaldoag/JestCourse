import { getDataFromApi } from '../promise';
import '@babel/polyfill'

describe('Probar async y await', () => {
    test('Realizar peticion a una API', async () => {
        const api = 'https://rickandmortyapi.com/api/character/';
        const getRick = 'https://rickandmortyapi.com/api/character/1'
        await getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
        });
        await getDataFromApi(getRick).then(data => {
            expect(data.name).toEqual('Rick Sanchez');
        });
    });
});


describe('Probar Async/Await 2', () => {
    test('Realizar una petición a una API', async () => {
      const api = 'https://rickandmortyapi.com/api/character/';
      const getRick = 'https://rickandmortyapi.com/api/character/1'
  
      const data = await getDataFromApi(api);
      expect(data.results.length).toBeGreaterThanOrEqual(0);
  
      const data2 = await getDataFromApi(getRick)
      expect(data2.name).toEqual('Rick Sanchez');
    });
  });