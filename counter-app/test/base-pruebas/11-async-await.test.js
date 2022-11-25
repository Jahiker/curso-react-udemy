import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Test on 11-async-await', () => {
    test('getImagen should an image url', async() => {
        const url = await getImagen();

        expect( typeof url ).toBe("string");
    })

    test('getImagen should and error if doesnt exist an Api Key', async () => {
        const resp = await getImagen();

        expect(resp).toBe("No se encontro la imagen");
    })
});
