package example.sis_libreria2.services;

import example.sis_libreria2.entity.Prestamo;

import java.util.List;

public interface PrestamoService {
    Prestamo save(Prestamo prestamo);
    List<Prestamo> findAll();
    Prestamo findById(String id);
    void deleteByID(String id);
    Prestamo update(Prestamo prestamo);
}
