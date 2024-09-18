package example.sis_libreria2.controller;

import example.sis_libreria2.entity.Alumno;
import example.sis_libreria2.services.AlumnoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
// http://localhost:8080/api/alumnos
@RequestMapping("/api/alumnos")
public class AlumnoController {
    private final AlumnoService alumnoService;

    public AlumnoController(AlumnoService alumnoService) {
        this.alumnoService = alumnoService;
    }
    // http://localhost:8080/api/alumnos
    @PostMapping()
    public Alumno save(@RequestBody Alumno alumno){
        return alumnoService.save(alumno);
    }
    // http://localhost:8080/api/alumnos
    @GetMapping
    public List<Alumno> findAll(){
        return alumnoService.findAll();
    }
    // http://localhost:8080/api/alumnos/1
    @GetMapping("/{id}")
    public Alumno findById(@PathVariable String id){
        return alumnoService.findById(id);
    }
    // http://localhost:8080/api/alumnos/5
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable String id){
        alumnoService.deleteById(id);
    }
    // http://localhost:8080/api/alumnos
    @PutMapping
    public Alumno updateAlumno(@RequestBody Alumno alumno){
        Alumno alumnoDb = alumnoService.findById(alumno.getCodigo());
        alumnoDb.setNombre(alumno.getNombre());
        alumnoDb.setEscuela(alumno.getEscuela());
        return alumnoService.update(alumno);
    }
}
