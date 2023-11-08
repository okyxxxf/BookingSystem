import EditData from "../../types/editData";
import Validator from "../validator";

class EditUserValidator implements Validator {
  public validateData = (data : EditData) : boolean => {
    const { name, email, phone } = data;

    const regularExpressions = {
      "name" : /[a-zA-Z]{4,20}/, // имя в длиной от 4 до 20 символов
		  "email" : /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/, // email адрес
		  "phone"  : /^\+\d{12}$/, // 12 цифр, так как это телефон
    }

    if (!regularExpressions.name.test(name!)) throw new Error('Имя введенно не корректно');
    if (!regularExpressions.email.test(email!)) throw new Error('Email введенно не корректно');
    if (!regularExpressions.phone.test(phone!)) throw new Error('Телефон введен не корректно');

    return true;
  }
}

export default EditUserValidator;