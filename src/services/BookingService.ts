import UserService from "./UserService";
import service from "./service";

class BookingService implements service {
	public url = 'http://127.0.0.1:8000/transactions/';

	public createResourse = async (concertId : any) => {
    const userService = new UserService();
		const user = await userService.getResourse();
		const {id} = user;

		const dateNow = new Date();
		

    const res = await fetch(this.url, {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${localStorage['auth-token']}`
      },
      body : JSON.stringify({
				user_id : id,
				concert_id : concertId,
				data : `${dateNow.getFullYear()}-${dateNow.getMonth()}-${dateNow.getDay()}`,	
			}),
    })

    if (!res.ok) throw new Error(res.statusText);

    return await res.json();
	}
}

export default BookingService;