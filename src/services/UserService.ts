import User from "../types/user";
import Service from "./service";

class UserService extends Service {
	protected url = 'http://127.0.0.1:8000/auth/users/me';

	public getInfoAboutMe = async () : Promise<User> => {
		const res = await fetch(this.url, {
			headers : {
				'Authorization' : `Token ${localStorage['auth-token']}`
			}
		});

		return await res.json();
	}
}

export default UserService;