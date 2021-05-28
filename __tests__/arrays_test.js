import { arrayFruits, arrayColors} from '../arrays';

describe('comprobaremos que existe una fruta', () => {
    test('Contine la fruta banana?', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('Contine la fruta banana?', () => {
        expect(arrayFruits()).not.toContain('Banana');
    });


    test('Comprobar tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(4);
    });
});

describe('Comprobaremos que existe un color', () => {
    test('Contine la fruta banana?', () => {
        expect(arrayColors()).toContain('azul');
    });
    test('Contine la fruta banana?', () => {
        expect(arrayColors()).not.toContain('Banana');
    });
});