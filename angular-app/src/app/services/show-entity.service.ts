import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShowEntityService {

  constructor(private http: HttpClient) { }
}
