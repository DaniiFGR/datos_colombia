import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  url="https://www.datos.gov.co/resource/9ssf-i6c5.json";

  constructor(private http: HttpClient) { }

  datos(){
    return this.http.get(this.url);
  }

}
