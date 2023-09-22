
export async function apiLogin(user, pass) {

    //De momento estoy usando una FakeApi, y por ello mismo el usuario esta hardcodeado
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: "hbingley1",
          password: "CQutx25i8r",
        })
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
        return "error";
    }
}
