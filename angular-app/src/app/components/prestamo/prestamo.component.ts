import { Component, inject, OnInit } from '@angular/core';
import { PrestamosService } from '../../services/prestamos.service';
import { Prestamo } from '../../models/prestamo.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-prestamo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './prestamo.component.html',
  styleUrl: './prestamo.component.css'
})
export default class PrestamoComponent implements OnInit{

  private prestamoService = inject(PrestamosService);

  listaPrestamos: Prestamo[] = [];

  ngOnInit(): void {
    this.prestamoService.list().subscribe(pres =>{
      this.listaPrestamos = pres;
    });
  }

  loadAll() {
    this.prestamoService.list().subscribe(pres =>{
      this.listaPrestamos = pres;
    });
  }

  eliminarPrestamo(prestamo: Prestamo) {
    this.prestamoService.delete(prestamo.cod_prestamo).subscribe(() =>{
      this.loadAll();
    });
  }

}
