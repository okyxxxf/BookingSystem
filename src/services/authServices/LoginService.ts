
import authToken from "../../types/authToken";
import AuthService from "./AuthService";

class LoginService extends AuthService {
   
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
}

export default LoginService;