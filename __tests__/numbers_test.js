import {numbers} from '../numbers';

describe ('Comparacion de numeros', () => {
    test('Mayor que', () => {
        expect(numbers(2,2)).toBeGreaterThan(5);
    });

    test('Mayor que o igual', () => {
        expect(numbers(2,2)).toBeGreaterThanOrEqual(4);
    });

    test('Menor que', () => {
        expect(numbers(2,2)).toBeLessThan(4);
    });

    test('Menor que o igual', () => {
        expect(numbers(2,2)).toBeLessThanOrEqual(5);
    });

    test('Numero Flotantes', () => {
        expect(numbers(0.2,0.2)).toBeCloseTo(0.4);
    });
    test('null', () =>{
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();

    });
});