import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  postScore(data): Observable<any> {
    let url = this.apiUrl + '/player/add';
    return this.httpClient.post(url, data);
  }

  getPlayersScore(): Observable<any> {
    let url = this.apiUrl + '/player/all';
    return this.httpClient.get(url);
  }
}
