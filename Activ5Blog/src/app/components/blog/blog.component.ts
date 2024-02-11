import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewNoticia } from '../../interfaces/Inewnoticia.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  // arrNoticias: any[] = [];
  @Input() noticias: NewNoticia[] = [];

  ngOnInit(): void {}

  todoCargado: Boolean = true;
  pushRealizado: Boolean = false;

  newPost: NewNoticia = {
    id: 0,
    titulo: '',
    pais: '',
    imagen: '',
    contenido: '',
    fecha: '',
    nombre: '',
  };

  validar() {
    console.log(this.noticias + 'asi esta la fecha ' + this.newPost.fecha);
    if (
      this.newPost.titulo &&
      this.newPost.pais &&
      this.newPost.imagen &&
      this.newPost.contenido &&
      this.newPost.fecha &&
      this.newPost.nombre != ''
    ) {
      this.newPost.id = this.noticias.length + 1;
      this.noticias.push(this.newPost);
      this.todoCargado = true;
      this.pushRealizado = true;
      console.log(this.noticias);
      console.log(this.todoCargado);
      this.newPost = {
        id: 0,
        titulo: '',
        pais: '',
        imagen: '',
        contenido: '',
        fecha: '',
        nombre: '',
      };
    } else {
      this.todoCargado = false;
    }
  }
}
