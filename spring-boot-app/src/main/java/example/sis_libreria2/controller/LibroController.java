package example.sis_libreria2.controller;

import example.sis_libreria2.entity.Libro;
import example.sis_libreria2.services.LibroService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
// http://localhost:8080/api/libros
@RequestMapping("/api/libros")
public class LibroController {

    private final LibroService libroService;

    public LibroController(LibroService libroService) {
        this.libroService = libroService;
    }

    // http://localhost:8080/api/libros
    @PostMapping()
    public Libro save(@RequestBody Libro libro){
        return libroService.save(libro);
    }

    // http://localhost:8080/api/libros
    @GetMapping
    public List<Libro> findAll(){
        return libroService.findAll();
    }

    // http://localhost:8080/api/libros/564
    @GetMapping("/{id}")
    public Libro findById(@PathVariable String id){
        return libroService.findById(id);
    }

    // http://localhost:8080/api/libros/646
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable String id){
        libroService.deleteById(id);
    }

    // http://localhost:8080/api/libros
    @PutMapping
    public Libro updateLibro(@RequestBody Libro libro){
        Libro libroDb = libroService.findById(libro.getId());
        libroDb.setTitulo(libro.getTitulo());
        libroDb.setAutor(libro.getAutor());
        libroDb.setAnio(libro.getAnio());
        libroDb.setCategoria(libro.getCategoria());
        libroDb.setCantidad(libro.getCantidad());
        return libroService.update(libro);
    }
}
