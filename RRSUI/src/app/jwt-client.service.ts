import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  url="http://localhost:8080"
  constructor(private httpClient: HttpClient) { }


authenticateClient(authenticationRequest:any)
{
  return this.httpClient.post<string>(`${this.url}/auth`,authenticationRequest, {  responseType: 'text' as 'json' })
}


subscribeClient(authenticationRequest:any)
{
  return this.httpClient.post<string>(`${this.url}/subs`,authenticationRequest, {  responseType: 'text' as 'json' })
}

 /* public authenticateClient(authenticationRequest:any) {
    return this.httpClient.post<string>("http://localhost:9091/auth", authenticationRequest, {  responseType: 'text' as 'json' });
  }*/


 /* public testingToken(generatedToken:any) {
    let tokenStr = 'Bearer ' + generatedToken;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<string>("http://localhost:9091/token", {headers, responseType: 'text' as 'json' });
  }*/

  loginUser(token:any)
  {
     localStorage.setItem("token",token)
     return true;
  }

  

  isLoggedIn()
  {
   var token= localStorage.getItem('token');
    if(token===undefined || token==='' || token===null || token==='Error during authentication')
    {
      return false;

    }else
    {
      return true;
    }
  }

  logout()
  {
    localStorage.removeItem('token')
    return true;
  }


  //for getting token
  getToken()
  {
    return localStorage.getItem('token');
    
  }



}