import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SoftwareInfo } from '../aggregations/SoftwareInfo';

@Injectable({
  providedIn: 'root'
})
export class TmControlService {


  constructor(private httpClient: HttpClient) {  }

  //budowa adresu ip.
  getApiUrl(address:string):string{
    return "http://"+address+":8000"
  }

  getStatus (address:string):boolean{

    this.httpClient.get<any>(this.getApiUrl(address)+"/status").subscribe(response=>{

    })
    return true
  }

  //pobranie listy oprogramowania możliwego do uruchomienia na automacie biletowym.
  getTmList(address:string):void{
    this.httpClient.get<any>(this.getApiUrl(address)+"/mtvm/find/all").subscribe(response =>{
      console.log(response)
    })
  }
}


