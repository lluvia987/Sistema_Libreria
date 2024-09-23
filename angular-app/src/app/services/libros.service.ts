import { HttpClient } from '@angular/common/http';
import { Injectable, inject} from '@angular/core';
import { Libro } from '../models/libro.interface';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private http = inject(HttpClient);
  
  list() {
    return this.http.get(`http://localhost:8080/api/libros`);
  } 

  get(id: string) {
    return this.http.get(`http://localhost:8080/api/libros/${id}`);
  }

  create(alumno: any) {
    return this.http.post(`http://localhost:8080/api/libros`, alumno);
  }

  update(alumno: Libro) {
    return this.http.put(`http://localhost:8080/api/libros`, alumno);
  }

  delete(id: String) {
    return this.http.delete(`http://localhost:8080/api/libros/${id}`);
  }
}
