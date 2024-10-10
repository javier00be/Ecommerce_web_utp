import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductosComponent {
  productos = [
    { img: 'https://static.zara.net/assets/public/b5a6/7952/ea134fce8608/e5419caba234/04344351707-e2/04344351707-e2.jpg?ts=1727684965262&w=292&f=auto', nombre: 'Camisa', precio: 70 },
    { img: 'https://www.projectpieta.com/wp-content/uploads/2022/02/polos.jpg', nombre: 'Polo', precio: 139 },
    { img: 'https://ikual.pe/cdn/shop/products/IKUBPCCRMPMAXXENEGR-BASIC_20MUJER-2023_1_M.jpg?v=1688834088', nombre: 'Polo Negro', precio: 135 },
    { img: 'https://plazavea.vteximg.com.br/arquivos/ids/26158862-512-512/20268940.jpg', nombre: 'Jeans azules', precio: 88 }
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
