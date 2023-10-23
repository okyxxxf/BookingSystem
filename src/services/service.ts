import Concert from "../types/concert";

abstract class Service {
  protected url : string= '';

  public getResourse = async (id : number | '' = '') => {
    const res = await fetch(`${this.url}${id}`, {
      headers: {
        'Authorization' : `Token ${localStorage['auth-token']}`
      }
    });
    
    if (!res.ok) throw new Error('Request is bad');

    return await res.json();
  };

  public AddResourse = async (body : Concert) => {
    const res = await fetch(this.url, {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(body),
    })

    if (!res.ok) throw new Error('Request is bad');

    return await res.json();
  };

  public DeleteResourse = async () => {
    // to do make functionality to delete concert, mb later (delete request)
  };

  public ChangeResourse = async () => {
    // to do make functionality to change concert, mb later (put, patch request)
  };
}

export default Service;