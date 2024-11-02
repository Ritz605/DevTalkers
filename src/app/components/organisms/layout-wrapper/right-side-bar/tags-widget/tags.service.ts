import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  constructor(private http: HttpClient) {}

  getTags(): Observable<any> {
    return this.http.get('/api/tags'); // Adjust the API endpoint as needed
  }
}