describe('Comparadores comunes',()=>{
    const user = {
        name: "Hernaldo",
        lastname: "alvarez"
    }
    const user2 = {
        name: "hernaldo",
        lastname: "alvarez"
    }

    test("igualdad de elementos", ()=>{
        expect(user).toEqual(user2);
    })

    test("No son exactamente iguales", ()=>{
        expect(user).not.toEqual(user2);
    })
});