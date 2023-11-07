import Concert from "../types/concert";

abstract class Service {
  protected url : string= '';

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

  public DeleteResourse = async () => {
    // to do make functionality to delete concert, mb later (delete request)
  };

  public ChangeResourse = async () => {
    // to do make functionality to change concert, mb later (put, patch request)
  };
}

export default Service;