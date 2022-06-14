import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';

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
      .retornar()
      .subscribe((result) => (this.articulos = result));
  }

  /**
   *   ngOnInit(): void {
    this.http
      .get('https://rickandmortyapi.com/api/character/1,2,3,4,5')
      .subscribe(
        (result) => {
          this.articulos = result;
        },
        (error) => {
          console.log('problemas');
        }
      );
  }
   */
}
