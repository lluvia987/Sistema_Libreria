import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./components/home/home.component'),
    },
    {
        path: 'alumnos', loadComponent: () => import('./components/alumno/alumno.component'),
    },
    {
        path: 'libros', loadComponent: () => import('./components/libro/libro.component'),
    },
    {
        path: 'prestamos', loadComponent: () => import('./components/prestamo/prestamo.component'),
    },
    {
        path: 'agregar', loadComponent: () => import('./components/add-entity/add-entity.component'),
    },
    {
        path: ':id/edit', loadComponent: () => import('./components/add-entity/add-entity.component'),
    },
];
