package example.sis_libreria2.services;

import example.sis_libreria2.entity.Libro;

import java.util.List;

public interface LibroService {
    Libro save(Libro libro);
    List<Libro> findAll();
    Libro findById(String id);
    void deleteById(String id);
    Libro update(Libro libro);
}
