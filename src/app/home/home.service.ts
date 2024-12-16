import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HomeApiResponse } from './home.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http = inject(HttpClient);

  private baseUrl = 'https://localhost:7018';

  getData(): Observable<HomeApiResponse> {
    const apiUrl = this.baseUrl + '/api/Home';
    return this.http.get<HomeApiResponse>(apiUrl);
  }
}
