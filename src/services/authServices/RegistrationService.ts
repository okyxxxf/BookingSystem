import RegistrationData from "../../types/registrationData";
import RegistrationValidator from "../../validators/registration/registrationValidator";
import AuthService from "./AuthService";
import LoginService from "./LoginService";

class RegistrationService extends AuthService {
  private loginService = new LoginService();
  private validate = new RegistrationValidator();
  override baseUrl = 'http://localhost:8000/auth/';

  public registration = async (data : RegistrationData) => {
    this.validate.validateData(data);
    const {login, password, email} = data;

    console.log(data);
    const res = await fetch(`${this.baseUrl}users/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username" : login,
        "password" : password,
				"email" : email,
      })
    });
    

    if (!res.ok) throw new Error(res.statusText);

		return this.loginService.login(login, password);
  };
}

export default RegistrationService;