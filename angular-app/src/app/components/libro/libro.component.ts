import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibrosService } from '../../services/libros.service';
import { Libro } from '../../models/libro.interface';


@Component({
  selector: 'app-libro',
  standalone: true, 
  imports: [RouterModule],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export default class LibroComponent implements OnInit{
  private libroService = inject(LibrosService);
  libros: Libro[] = [];
  
  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.libroService.list()
    .subscribe(libroAgregar => {
      this.libros = libroAgregar;
  
    });
  }

  deleteLibro(libro: Libro) {
    this.libroService.delete(libro.id)
    .subscribe(() =>{
      this.loadAll();
    });
  }

}
