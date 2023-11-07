class AuthService {
  protected baseUrl = 'http://localhost:8000/auth/';
  protected token = localStorage['auth-token'];

  public logout = async () : Promise<any> => {
    const res = await fetch(`${this.baseUrl}token/logout/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${this.token}`
      }
    });

    if (!res.ok) throw new Error('cant logout');

    return res;
  };
}

export default AuthService;