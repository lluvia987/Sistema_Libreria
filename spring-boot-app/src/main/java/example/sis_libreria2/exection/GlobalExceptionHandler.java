package example.sis_libreria2.exection;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorDatails> handlerResouceNotFoundException(ResourceNotFoundException ex,
                                                                        WebRequest webRequest){
        ErrorDatails error = new ErrorDatails(
                LocalDateTime.now(),
                ex.getMessage(),
                webRequest.getDescription(false),
                "NOT FOUND"
        );
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
}
