import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Test on 05-funciones.js", () => {
  test("getUser must return an object", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo should return and object", () => {
    const usuarioActivo = {
      uid: "ABC567",
      username: "Jahiker",
    };

    const user = getUsuarioActivo("Jahiker");

    expect(usuarioActivo).toStrictEqual(user);
  });
});
