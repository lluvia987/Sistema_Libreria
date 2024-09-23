import { Component, OnInit, inject} from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { RouterModule } from '@angular/router';
import { Alumno } from '../../models/alumno.interface';
@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export default class AlumnoComponent implements OnInit{

  private alumnoService = inject(AlumnosService);
  alumnos: Alumno[] = [];

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.alumnoService.list()
    .subscribe(alumnosparam => {
      this.alumnos = alumnosparam;
    })
  }
  //agrefndo
  deleteAlumno(alumno: Alumno) {
    this.alumnoService.delete(alumno.codigo)
    .subscribe(()=>{
      this.loadAll();
    })
  }
  

}

