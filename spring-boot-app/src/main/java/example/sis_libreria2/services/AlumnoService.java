package example.sis_libreria2.services;

import example.sis_libreria2.entity.Alumno;

import java.util.List;

public interface AlumnoService {
    Alumno save(Alumno alumno);
    List<Alumno> findAll();
    Alumno findById (String id);
    void deleteById(String id);
    Alumno update(Alumno alumno);
}
