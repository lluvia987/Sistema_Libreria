package example.sis_libreria2.controller;

import example.sis_libreria2.entity.Prestamo;
import example.sis_libreria2.services.PrestamoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
// http://localhost:8080/api/prestamos
@RequestMapping("/api/prestamos")
public class PrestamoController {

    private final PrestamoService prestamoService;

    public PrestamoController(PrestamoService prestamoService) {
        this.prestamoService = prestamoService;
    }

    // http://localhost:8080/api/prestamos
    @PostMapping()
    public Prestamo save(@RequestBody Prestamo prestamo){
        return prestamoService.save(prestamo);
    }

    // http://localhost:8080/api/prestamos
    @GetMapping
    public List<Prestamo> findAll(){
        return prestamoService.findAll();
    }

    // http://localhost:8080/api/prestamos/646
    @GetMapping("/{id}")
    public Prestamo findById(@PathVariable String id){
        return prestamoService.findById(id);
    }

    // http://localhost:8080/api/prestamos/6546
    @DeleteMapping("/{id}")
    public void deleteByID(@PathVariable String id){
        prestamoService.deleteByID(id);
    }

    // http://localhost:8080/api/prestamos
    @PutMapping
    public Prestamo updatePrestamo(@RequestBody Prestamo prestamo){
        Prestamo prestamoDb = prestamoService.findById(prestamo.getCod_prestamo());
        prestamoDb.setId(prestamo.getId());
        prestamoDb.setCodigo(prestamo.getCodigo());
        prestamoDb.setFecha(prestamo.getFecha());
        return prestamoService.update(prestamo);
    }

}
