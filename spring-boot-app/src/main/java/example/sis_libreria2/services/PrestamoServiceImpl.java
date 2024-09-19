package example.sis_libreria2.services;

import example.sis_libreria2.entity.Prestamo;
import example.sis_libreria2.exection.ResourceNotFoundException;
import example.sis_libreria2.repository.PrestamoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrestamoServiceImpl implements PrestamoService{

    private final PrestamoRepository prestamoRepository;

    public PrestamoServiceImpl(PrestamoRepository prestamoRepository) {
        this.prestamoRepository = prestamoRepository;
    }

    @Override
    public Prestamo save(Prestamo prestamo) {
        return prestamoRepository.save(prestamo);
    }

    @Override
    public List<Prestamo> findAll() {
        return prestamoRepository.findAll();
    }

    @Override
    public Prestamo findById(String id) {
        Prestamo prestamo = prestamoRepository.findById(id).orElseThrow(
                () ->{
                    throw new ResourceNotFoundException("prestamo con id "+id+" no se encuentra");
                }
        );
        return prestamo;
    }

    @Override
    public void deleteByID(String id) {
        prestamoRepository.deleteById(id);
    }

    @Override
    public Prestamo update(Prestamo prestamo) {
        return prestamoRepository.save(prestamo);
    }
}
