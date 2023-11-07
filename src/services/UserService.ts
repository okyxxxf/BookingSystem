import User from "../types/user";
import Service from "./service";

class UserService implements Service {
	public url = 'http://127.0.0.1:8000/auth/users/me/';

	public getResourse = async () : Promise<User> => {
		const res = await fetch(this.url, {
			headers : {
				'Authorization' : `Token ${localStorage['auth-token']}`
			}
		});

		return await res.json();
	}

	public editResourse = async (name : string, email : string, phone : string) => {
		const res = await fetch(this.url, {
			method : 'PATCH',
			headers : {
				'Content-Type' : 'application/json',
				'Authorization' : `Token ${localStorage['auth-token']}`
			},
			body : JSON.stringify({
				"username" : name,
				"email" : email,
				"phone" : phone,
			}),
		});

		return await res.json();
	}
}

export default UserService;