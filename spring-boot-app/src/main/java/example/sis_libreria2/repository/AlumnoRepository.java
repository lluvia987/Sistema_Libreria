package example.sis_libreria2.repository;

import example.sis_libreria2.entity.Alumno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlumnoRepository extends JpaRepository <Alumno, Integer> {
}
