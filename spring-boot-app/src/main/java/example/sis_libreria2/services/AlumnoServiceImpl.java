package example.sis_libreria2.services;

import example.sis_libreria2.entity.Alumno;
import example.sis_libreria2.exection.ResourceNotFoundException;
import example.sis_libreria2.repository.AlumnoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlumnoServiceImpl implements AlumnoService {

    private final AlumnoRepository alumnoRepository;

    public AlumnoServiceImpl(AlumnoRepository alumnoRepository) {
        this.alumnoRepository = alumnoRepository;
    }

    @Override
    public Alumno save(Alumno alumno) {
        return alumnoRepository.save(alumno);
    }

    @Override
    public List<Alumno> findAll() {
        return alumnoRepository.findAll();
    }

    @Override
    public Alumno findById(String id) {
        Alumno alumno = alumnoRepository.findById(id).orElseThrow(
                () ->{
                    throw new ResourceNotFoundException("Alumno con Codigo "+id+" no se encuentra");
                }
        );
        return alumno;
    }

    @Override
    public void deleteById(String id) {
        alumnoRepository.deleteById(id);
    }

    @Override
    public Alumno update(Alumno alumno) {
        return alumnoRepository.save(alumno);
    }
}
