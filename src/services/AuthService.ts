import authToken from "../types/authToken";

class AuthService {
  private baseUrl = 'http://localhost:8000/auth/';
  private token = localStorage['auth-token'];

  public login = async (login : string, password : string) : Promise<authToken> => {
    const res = await fetch(`${this.baseUrl}token/login/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username" : login,
        "password" : password,
      })
    });

    if (!res.ok) throw new Error('Login or password is incorrect')

    return await res.json();
  };

  public logout = async () : Promise<any> => {
    const res = await fetch(`${this.baseUrl}token/logout/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${this.token}`
      }
    });

    if (!res.ok) throw new Error('cant logout');

    return await res;
  };
   
  registration = () => {
    // to do registration
  };
}

export default AuthService;