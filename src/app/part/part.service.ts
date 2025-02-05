import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Part } from './classes/part.component'

@Injectable({
  providedIn: 'root'
})
export class PartService {
  constructor(private client: HttpClient) {
    
  }

  getParts(URL: string): Observable<Part[]> {
    return this.client.get<Part[]>(URL);
  }
}
