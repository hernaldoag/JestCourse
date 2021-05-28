import { isNull, isTrue } from '../true';
import { isFalse, isUndefined} from '../true';

describe('Probar resultados nulos',() => {
    test('Null', () => {
        expect(isNull()).toBeNull();
    });
});

describe('Probar resultados verdaderos', () => {
    test('Verdadero', () =>{
        expect(isTrue()).toBeTruthy();
    })
});

describe('Probar resultados falsos', () => {
    test('falsos', ()=>{
        expect(isFalse()).toBeFalsy();
    });
});

describe('Probar resultados undefined', () => {
    test('Undefined', () =>{
        expect(isUndefined()).toBeUndefined();
    })
});

describe('Probar resultado no verdaderos', () => {
    test('Falso o verdadero',() => {
        expect(isFalse()).not.toBeTruthy();

    });
});

describe('Probar resultado no verdaderos', () => {
    test('Falso o verdadero',() => {
        expect(isTrue()).not.toBeTruthy();

    });
});