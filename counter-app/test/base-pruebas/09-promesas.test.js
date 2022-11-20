import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Test on 09-promesas.js", () => {
  test("getHeroeByIdAsync should return a heroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroeByIdAsync should thorw an error if hero doesn't exist", (done) => {
    const id = 100;

    getHeroeByIdAsync(id)
    .then(hero => {
        expect( hero ).toBeFalsy();
    })
    .catch((error) => {
      expect( error ).toBe("No se pudos encontrar el héroe");
      done();
    });
  });
});
