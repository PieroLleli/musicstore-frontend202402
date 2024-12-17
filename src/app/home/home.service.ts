import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HomeApiResponse } from './home.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http = inject(HttpClient);

  private baseUrl = environment.baseUrl;

  getData(): Observable<HomeApiResponse> {
    const apiUrl = this.baseUrl + '/api/Home';
    return this.http.get<HomeApiResponse>(apiUrl);
  }
}
