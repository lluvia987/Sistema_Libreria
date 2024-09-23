package example.sis_libreria2.repository;

import example.sis_libreria2.entity.Prestamo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrestamoLibro extends JpaRepository<Prestamo, Integer> {

}

