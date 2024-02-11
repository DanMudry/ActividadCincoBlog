import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { NewNoticia } from './interfaces/Inewnoticia.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BuscapaisComponent } from './components/buscapais/buscapais.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BlogComponent,
    FormsModule,
    CommonModule,
    BuscapaisComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Actividad 5 con Agregados';
  buscaPais: string = '';
  arrNoticias: NewNoticia[] = [
    {
      id: 1,
      titulo: 'Puerto Escondido',
      pais: 'Mejico',
      imagen: 'direccion imagen',
      contenido: 'Playa con olas muy rapidas',
      fecha: new Date(),
      nombre: 'Igna Del Sastre',
    },
    {
      id: 2,
      titulo: 'Jaws',
      pais: 'Hawai',
      imagen: 'direccion imagen',
      contenido: 'Hay que ser un verdadero profesional',
      fecha: new Date(),
      nombre: 'Vicente Topadora Lupotti',
    },
  ];
}
