import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductosComponent {
  productos = [
    { img: 'assets/img/product1.jpg', nombre: 'Casaca Regular Fit', precio: 135 },
    { img: 'assets/img/product2.jpg', nombre: 'Casaca Regular Fit', precio: 139 },
    { img: 'assets/img/product3.jpg', nombre: 'Casaca Regular Fit', precio: 135 },
    { img: 'assets/img/product4.jpg', nombre: 'Casaca Regular Fit', precio: 135 }
  ];

  nuevoProducto = {
    nombre: '',
    precio: null,
    marca: '',
    genero: '',
    talla: '',
    descripcion: '',
    img: ''
  };

  actualizarProducto(producto: any) {
    // Lógica para actualizar el producto
    console.log('Actualizar producto:', producto);
  }

  guardarProducto() {
    // Lógica para guardar el nuevo producto
    console.log('Guardar producto:', this.nuevoProducto);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // Lógica para manejar la subida de archivos
    console.log('Archivo seleccionado:', file);
  }
}
