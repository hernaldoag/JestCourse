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

describe('Testear Fallos', () => {
    test('Realizar una petición con error a una API', async () => {
        const apiError = 'http://httpstat.us/404';
        const request = getDataFromApi(apiError);
        await expect(request).rejects.toEqual(Error('Request failed with status code 404'));
                                               
    });

    test('Realizar una petición con error a una API - 500', async () => {
        const apiError = 'http://httpstat.us/500';
        const request = getDataFromApi(apiError);
        await expect(request).rejects.toEqual(Error('Request failed with status code 500'));
                                               
    });

    test('Resuelve un hola', async () => {
        await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
        await expect(Promise.resolve('Error')).resolves.toBe('Error');                                      
    });

});