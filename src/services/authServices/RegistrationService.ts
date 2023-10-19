import AuthService from "./AuthService";
import LoginService from "./LoginService";

class RegistrationService extends AuthService {
  private loginService = new LoginService();

  public registration = async (name : string, email : string, password : string) => {
    const res = await fetch(`${this.baseUrl}users/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username" : name,
        "password" : password,
				"email" : email,
      })
    });
    

    if (!res.ok) throw new Error(res.statusText);

		return this.loginService.login(name, password);
  };
}

export default RegistrationService;