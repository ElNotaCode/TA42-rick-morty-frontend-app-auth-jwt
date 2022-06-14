import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css'],
})
export class CharacterInfoComponent implements OnInit {
  idCharacter: string = '';
  currentCharacter: any;

  constructor(
    private route: ActivatedRoute,
    private articulosService: ArticulosService
  ) {
    this.route.params.subscribe((params) => (this.idCharacter = params['id']));
    console.log(this.idCharacter);
  }

  ngOnInit(): void {
    this.getCharacter(this.route.snapshot.paramMap.get('id'));
  }

  getCharacter(id: string | null): void {
    this.articulosService.get(id).subscribe(
      (character) => {
        this.currentCharacter = character;
        console.log(character);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
