import { sumar, multiplicar, restar, dividir } from '../maths.js';

describe('Calculos matematicos', ()=> {
    test('Prueba de sumas', ()=>{
        expect(sumar(1,1)).toBe(2);
    })
    test('Prueba de resta', ()=>{
        expect(restar(5,2)).toBe(3);
    })
    test('Prueba de multplicacion', ()=>{
        expect(multiplicar(5,2)).toBe(10);
    })
    test('Prueba de division', ()=>{
        expect(dividir(5,2)).toBe(2.5);
    })
    test('Prueba de division negativa', ()=>{
        expect(dividir(5,2)).toBe(10);
    })
});
