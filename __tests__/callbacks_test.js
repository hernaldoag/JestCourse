import { callbackHell } from '../callback';

describe('Probando un callback', () => {
    test('CallBack', done => {
        function otherCallback(data) {
            expect(data).not.toBe('HolaJavascripters')
            done();
        }
        callbackHell(otherCallback);
    });


    test('CallBack - 1', done => {
        function otherCallback(data) {
            expect(data).toBe('Hola Javascripters')
            done();
        }
        callbackHell(otherCallback);
    });
});

