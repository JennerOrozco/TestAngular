import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataPostService {
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<any>(environment.apiUrl + '/getData.php');
  }

  getDataById(id){
    return fetch('http://localhost/getDataById.php',{
      method: 'POST',
      mode: 'cors',body: JSON.stringify({Id: id})}).
      then(res => res.json()).then(res => {return res[0]});
  }
  
  addData(objeto){
      return fetch('http://localhost/addData.php',{
          method: 'POST',
          mode: 'cors',body: JSON.stringify(objeto)}).
          then(res => res.json()).then(res => {return res[0]});
  }
  updData(objeto){
    return fetch('http://localhost/updData.php',{
          method: 'POST',
          mode: 'cors',body: JSON.stringify(objeto)}).
          then();
  }
  delData(id){
    return fetch('http://localhost/delData.php',{
          method: 'POST',
          mode: 'cors',body: JSON.stringify({Id: id})}).          
          then();
  }

}
