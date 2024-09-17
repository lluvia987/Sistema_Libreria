package entity;
import java.util.Date;

public class Prestamo {
    private String cod_prestamo;
    private String id;
    private String codigo;
    private Date fecha;

    public Prestamo() {
    }

    public Prestamo(String cod_prestamo, String id, String codigo, Date fecha) {
        this.cod_prestamo = cod_prestamo;
        this.id = id;
        this.codigo = codigo;
        this.fecha = fecha;
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

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
}
