package example.sis_libreria2.services;

import example.sis_libreria2.entity.Libro;
import example.sis_libreria2.repository.LibroRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;

@Service
public class LibroServiceImpl implements LibroService {

    private final LibroRepository libroRepository;

    public LibroServiceImpl(LibroRepository libroRepository) {
        this.libroRepository = libroRepository;
    }

    @Override
    public Libro save(Libro libro) {
        return libroRepository.save(libro);
    }

    @Override
    public List<Libro> findAll() {
        return libroRepository.findAll();
    }

    @Override
    public Libro findById(String id) {
        Libro libro = libroRepository.findById(id).orElseThrow(
                () ->{
                    throw  new ResourceAccessException("El Libro con el "+id+" no se encuentra");
                }
        );
        return libro;
    }

    @Override
    public void deleteById(String id) {
        libroRepository.deleteById(id);
    }

    @Override
    public Libro update(Libro libro) {
        return libroRepository.save(libro);
    }
}
