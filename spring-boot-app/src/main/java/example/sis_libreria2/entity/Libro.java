package example.sis_libreria2.entity;

import jakarta.persistence.*;

@Entity
@Table(name="libros")
public class Libro {
    @Id
    private String id;
    private String autor;
    private Integer anio;
    private String categoria;
    private Integer cantidad;

    public Libro() {
    }

    public Libro(String id, String autor, Integer anio, String categoria, Integer cantidad) {
        this.id = id;
        this.autor = autor;
        this.anio = anio;
        this.categoria = categoria;
        this.cantidad = cantidad;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public Integer getAnio() {
        return anio;
    }

    public void setAnio(Integer anio) {
        this.anio = anio;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }
}
