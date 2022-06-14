import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articulos: any = null;

  constructor(private articulosService: ArticulosService) {}

  ngOnInit() {
    this.articulosService
      .getAll()
      .subscribe((result) => (this.articulos = result));
  }
}
