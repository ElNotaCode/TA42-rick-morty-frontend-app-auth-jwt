import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  articulos: any = null;

  constructor(private articulosService: ArticulosService) {}

  ngOnInit() {
    this.articulosService
      .getAll()
      .subscribe((result) => (this.articulos = result));
  }
}
