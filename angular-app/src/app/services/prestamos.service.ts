import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Prestamo } from '../models/prestamo.interface';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  private http = inject(HttpClient);

  list() {
    return this.http.get<Prestamo[]>('http://localhost:8080/api/prestamos');
  }

  findById(id: string) {
    return this.http.get<Prestamo>(`http://localhost:8080/api/prestamos/${id}`);
  }

  create(prestamo: Prestamo) {
    return this.http.post<Prestamo>('http://localhost:8080/api/prestamos', prestamo);
  }

  update(prestamo: Prestamo) {
    return this.http.put<Prestamo>('http://localhost:8080/api/prestamos', prestamo);
  }

  delete(id: String) {
    return this.http.delete<void>(`http://localhost:8080/api/prestamos/${id}`);
  }
}
