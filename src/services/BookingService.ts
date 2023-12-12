import Transaction from "../types/transaction";
import ConcertService from "./ConcertService";
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
				data : `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`,	
			}),
    })

    if (!res.ok) throw new Error(res.statusText);

    return await res.json();
	}

  public getResourse = async () : Promise<Array<Transaction>> => {
    const userService = new UserService();
		const user = await userService.getResourse();
		const {id} = user;

    const res = await fetch(`${this.url}user/${id}`, {
      headers : {
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${localStorage['auth-token']}`
      }
    });

    if (!res.ok) throw new Error(res.statusText);

    const resArray = await res.json();
    await resArray.forEach((transaction : Transaction) => {
      this.checkStatus(transaction)
      .then(status => transaction.status = status);
    });

    return resArray;
  }

  private checkStatus = async (transaction : Transaction) : Promise<'В архиве' | 'Актуально'> => {
    const {concert_id} = transaction;
    const {data} = await new ConcertService().getResourse(+concert_id);
    const timestamp = new Date(data);

    if (timestamp.getTime > new Date().getTime) return 'В архиве';
    return 'Актуально';
  }

  public deleteResourse = async (id: number) : Promise<any> => {
    const res = await fetch(`${this.url}${id}`, {
      method : 'DELETE',
      headers : {
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${localStorage['auth-token']}`
      },
    });

    if (!res.ok) throw new Error(res.statusText);
  }
}

export default BookingService;