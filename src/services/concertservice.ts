import Concert from "../types/concert";
import Service from "./service";

class ConcertService implements Service{
  public url = 'http://127.0.0.1:8000/concerts/';
  public getResourse = async(id : number = 1) => {
    const res = await fetch(`${this.url}/${id}`, {
      headers: {
        'Authorization' : `Token ${localStorage['auth-token']}`
      }
    });
    
    if (!res.ok) throw new Error('Request is bad');

    return await res.json();
  };

  public getResourses = async() => {
    const res = await fetch(`${this.url}`);
    
    if (!res.ok) throw new Error('Request is bad');

    return await res.json();
  };

  public createResourse = async (body : Concert) => {
    const res = await fetch(this.url, {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${localStorage['auth-token']}`
      },
      body : JSON.stringify(body),
    })

    if (!res.ok) throw new Error('Request is bad');

    return await res.json();
  };
}

export default ConcertService;