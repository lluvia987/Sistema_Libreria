package example.sis_libreria2.exection;

public class ResourceNotFoundException extends RuntimeException {
    private String message;
    public ResourceNotFoundException(String message){
        super(message);
        this.message = message;
    }
}
