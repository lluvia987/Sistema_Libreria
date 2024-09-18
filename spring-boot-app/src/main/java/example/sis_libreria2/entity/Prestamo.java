package example.sis_libreria2.entity;
import jakarta.persistence.*;
import org.springframework.data.jpa.repository.Temporal;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "prestamo")
public class Prestamo {
    @Id
    private String cod_prestamo;
    private String id;
    private String codigo;
    private LocalDateTime fecha;

    public Prestamo() {
    }

    public Prestamo(String cod_prestamo, String id, String codigo, LocalDateTime fecha) {
        this.cod_prestamo = cod_prestamo;
        this.id = id;
        this.codigo = codigo;
        this.fecha = fecha;
    }

    @PrePersist
    public void prePersist() {
        this.fecha = LocalDateTime.now();  // Establece la fecha actual al guardar
    }

    public String getCod_prestamo() {
        return cod_prestamo;
    }

    public void setCod_prestamo(String cod_prestamo) {
        this.cod_prestamo = cod_prestamo;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }
}
