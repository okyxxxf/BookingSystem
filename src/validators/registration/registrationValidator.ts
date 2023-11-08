import Validator from "../validator";
import RegistrationData from "../../types/registrationData";

class RegistrationValidator implements Validator {
  public validateData = (data : RegistrationData) : boolean => {
    const { login, email, password, passwordConfirm } = data;

    const regularExpressions = {
      "name" : /[a-zA-Z]{4,20}/, // имя в длиной от 4 до 20 символов
		  "email" : /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/, // email адрес
		  "password"  : /[a-zA-Z0-9]{8,20}/ // пароль англбуквы и цифры от 8 до 20
    }

    if (!regularExpressions.name.test(login)) throw new Error('Имя введенно не корректно');
    if (!regularExpressions.email.test(email)) throw new Error('Email введенно не корректно');
    if (!regularExpressions.password.test(password)) throw new Error('Пароль введенно не корректно');
    if (password !== passwordConfirm) throw new Error('Пароли не совпадают');

    return true;
  }
}

export default RegistrationValidator;