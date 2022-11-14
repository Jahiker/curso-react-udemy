import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Test on 08-imp-exp', () => {
    test('getHeroeById should return and hero by id', () => {
        const id = 1;

        const testHero = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        };

        const heroe = getHeroeById(id);

        expect(heroe).toEqual(testHero);
    })

    test('getHeroeById should return undefined if does not exist the id', () => {
        const id = 100;

        const heroe = getHeroeById(id);

        expect(heroe).toEqual(undefined);

        expect(heroe).toBeFalsy();
    })

    /**
     * Tarea:
     * Debe retornar un arreglo con los heroeas DC
     * Length === 3
     * toEqual al arreglo filtrado
     * 
     * 
     * Debe retornar un arreglo con los heroes de Marvel
     * legnth === 2
     */

    test('getHeroesByOwner should return array with length = 3 and all DC heroes', () => {
        const owner = "DC";

        const DCHeroes = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ];

        const heroes = getHeroesByOwner(owner);

        expect(heroes).toEqual(DCHeroes);

        expect(heroes.length).toBe(3);

    })

    test('getHeroesByOwner should return array with length = 2 and all Marvel heroes', () => {
        const owner = "Marvel";

        const MarvelHeroes = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }
        ];

        const heroes = getHeroesByOwner(owner);

        expect(heroes).toEqual(MarvelHeroes);

        expect(heroes.length).toBe(2);

    })
})