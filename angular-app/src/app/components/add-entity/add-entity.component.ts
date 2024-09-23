import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule} from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AlumnosService } from '../../services/alumnos.service';
import { Alumno } from '../../models/alumno.interface';
import { PrestamosService } from '../../services/prestamos.service';
import { Prestamo } from '../../models/prestamo.interface';
import { Libro } from '../../models/libro.interface';
import { LibrosService } from '../../services/libros.service';

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
  private prestamoService = inject(PrestamosService);
  private libroService = inject(LibrosService);
  // definimos variables;
  form?: FormGroup;
  form2?: FormGroup;
  form3?: FormGroup;
  contact?: Alumno;
  prestamos?: Prestamo;
  libros?: Libro;
  validPrestamo: boolean = false;
  validAlumno: boolean = false;
  validLibro: boolean = false;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.validPrestamo = params['validPrestamo'];
      this.validAlumno = params['validAlumno'];
      this.validLibro = params['validLibro'];
    });

    const id = this.route.snapshot.paramMap.get('id'); // id es constante(nose modifica)4
    // represetancion estatica de la ruta en el momento, paramMap = contiene los parammtros de la ruta
    if (id) {
      if(this.validAlumno){
        this.contactService.get(id).subscribe(contact => {
          this.contact = contact;
          this.form = this.fb.group({
            codigo: [contact.codigo, [Validators.required]],
            escuela: [contact.escuela, [Validators.required]],
            nombre: [contact.nombre, [Validators.required]],
          });
        }); 
      }
      if(this.validPrestamo){
        this.prestamoService.findById(id).subscribe(prest =>{
          this.prestamos = prest;
          this.form2 = this.fb.group({
            cod_prestamo: [prest.cod_prestamo, [Validators.required]],
            id: [prest.id, [Validators.required]],
            codigo: [prest.codigo, [Validators.required]],
          });
        });
      }
      if(this.validLibro){
        this.libroService.get(id).subscribe(lib =>{
          this.form3 = this.fb.group({
            id: [lib.id, [Validators.required]],
            titulo: [lib.titulo, [Validators.required]],
            autor: [lib.autor, [Validators.required]],
            anio: [lib.anio, [Validators.required]],
            categoria: [lib.categoria, [Validators.required]],
            cantidad: [lib.cantidad, [Validators.required]],
          });
        });
      } 

    } else {

      if(this.validAlumno){
        this.form = this.fb.group({
          codigo: ['', [Validators.required]],
          escuela: ['', [Validators.required]],
          nombre: ['', [Validators.required]],
        });
      }
      if(this.validPrestamo){
        this.form2 = this.fb.group({
          cod_prestamo: ['', [Validators.required]],
          id: ['', [Validators.required]],
          codigo: ['', [Validators.required]],
        });
      }
      if(this.validLibro){
        this.form3 = this.fb.group({
          id: ['', [Validators.required]],
          titulo: ['', [Validators.required]],
          autor: ['', [Validators.required]],
          anio: ['', [Validators.required]],
          categoria: ['', [Validators.required]],
          cantidad: ['', [Validators.required]],
        });
      } 
    }
  }

  create_or_save() {
    const alumno_formulario = this.form!.value;
    if (this.contact) {
      this.contactService.update(this.contact.codigo, alumno_formulario)
      .subscribe(()=>{
        this.router.navigate(['/alumnos']);
      });
    }else {
      this.contactService.create(alumno_formulario)
      .subscribe(()=>{
        console.log('Alumno creado exitosamente')
        this.router.navigate(['/alumnos']);
      });
    }
  }

  save_prestamo() {
    const prestamo_formulario = this.form2!.value;
    if (this.contact) {
      this.prestamoService.update(prestamo_formulario).subscribe(()=>{
        this.router.navigate(['/prestamos']);
      });
    }else {
      this.prestamoService.create(prestamo_formulario).subscribe(()=>{
        this.router.navigate(['/prestamos']);
      });
    }
  }
  save_libro() {
    const libro_formulario = this.form3!.value;
    if (this.libros) {
      this.libroService.update(libro_formulario).subscribe(()=>{
        this.router.navigate(['/libros']);
      });
    }else {
      this.libroService.create(libro_formulario).subscribe(()=>{
        this.router.navigate(['/libros']);
      });
    }
  }
}
