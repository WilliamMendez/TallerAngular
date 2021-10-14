import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListarComponent } from './book-listar/book-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookListarComponent],
  exports: [BookListarComponent],
})
export class BookModule { }
