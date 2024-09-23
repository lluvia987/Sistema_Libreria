import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule} from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AlumnosService } from '../../services/alumnos.service';
import { Alumno } from '../../models/alumno.interface';

//Constructor->ngOnInit->otras-funciones

@Component({
  selector: 'app-add-entity',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule], // para vincularlo a la estructura html 
  templateUrl: './add-entity.component.html',
  styleUrl: './add-entity.component.css'
})
export default class AddEntityComponent implements OnInit{
  // le indicamos a angular que queremos crear instancias de algunos servicios y pasarlas a nuestro componente para q la usemos
  private fb = inject(FormBuilder); // se usa para crear formularios de angular
  private router = inject(Router); // se usa para nevegar entre rutas de la aplicacion
  private route = inject(ActivatedRoute) // proporciona informacion de la ruta actual asi como los parametros de la ruta
  private contactService = inject(AlumnosService); // se encarga de interactuar con la api para sacar datos del backend
  // definimos variables;
  form: FormGroup = this.fb.group({
    codigo: ['', [Validators.required]],
    escuela: ['', [Validators.required]],
    nombre: ['', [Validators.required]]
  });
  contact?: Alumno;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') // id es constante(nose modifica)4
    // represetancion estatica de la ruta en el momento, paramMap = contiene los parammtros de la ruta
    if (id) {
      this.contactService.get(id)
      .subscribe(contact => {
        this.contact = contact;
        this.form = this.fb.group({
          codigo: [contact.codigo, [Validators.required]],
          escuela: [contact.escuela, [Validators.required]],
          nombre: [contact.nombre, [Validators.required]],
        });
      }) 
    } else {
      this.form = this.fb.group({
        name: ['', [Validators.required]],
        escuela: ['', [Validators.required]],
        nombre: ['', [Validators.required]],
      })
    }
  }

  create_or_save() {
    const alumno_formulario = this.form!.value;
    if (this.contact) {
      this.contactService.update(this.contact.codigo, alumno_formulario)
      .subscribe(()=>{
        this.router.navigate(['/']);
      });
    }else {
      this.contactService.create(alumno_formulario)
      .subscribe(()=>{
        this.router.navigate(['/']);
      });
    }

    

  }
}
