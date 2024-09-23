import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Alumno } from '../models/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private http = inject(HttpClient);
  
list() {
  return this.http.get<Alumno[]>(`http://localhost:8080/api/alumnos`);
}

get(id: string) {
  return this.http.get<Alumno>(`http://localhost:8080/api/alumnos/${id}`);
}

create(alumno: Alumno) {
  return this.http.post<Alumno>(`http://localhost:8080/api/alumnos`, alumno);
}

update(alumno: Alumno) {
  return this.http.put<Alumno>(`http://localhost:8080/api/alumnos`, alumno);
}

delete(id: String) {
  return this.http.delete(`http://localhost:8080/api/alumnos/${id}`);
}




}
