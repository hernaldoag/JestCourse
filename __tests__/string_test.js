describe('Comprobar cadenas de texto', ()=>{
    
    const text = 'un bonito texto';

    test('Debe Contener el siguiente texto', () => {
        expect(text).toMatch(/bonito/);
    });

    test('No contiene el siguiente texto', () => {
        expect(text).not.toMatch(/es/);
    });

    test('No contiene el siguiente texto', () => {
        expect(text).toHaveLength(15);
    });
});