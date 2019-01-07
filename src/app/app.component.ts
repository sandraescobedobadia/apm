// Importamos los miembros que necesitamos (Component)
import { Component } from '@angular/core';

// Definimos el decorador del miembro importado (Component)
// El decorador incluye los metadatos y la plantilla para la vista
@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' [routerLink]="['/products']">Product List</a></li>
      </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `
})

// Definimos las propiedades y los métodos de nuestra clase necesarios para nuetra vista
// Como la exportamos, se trata de un módulo ES
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
