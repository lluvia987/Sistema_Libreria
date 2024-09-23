import { HttpClient } from '@angular/common/http';
import { Injectable, inject} from '@angular/core';
import { Libro } from '../models/libro.interface';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private http = inject(HttpClient);
  
  list() {
    return this.http.get<Libro[]>(`http://localhost:8080/api/libros`);
  } 

  get(id: string) {
    return this.http.get<Libro>(`http://localhost:8080/api/libros/${id}`);
  }

  create(libro: Libro) {
    return this.http.post<Libro>(`http://localhost:8080/api/libros`, libro);
  }

  update(libro: Libro) {
    return this.http.put<Libro>(`http://localhost:8080/api/libros`, libro);
  }

  delete(id: String) {
    return this.http.delete(`http://localhost:8080/api/libros/${id}`);
  }
}
