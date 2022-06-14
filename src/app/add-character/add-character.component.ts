import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent implements OnInit {
  constructor(private articulosService: ArticulosService) {}

  ngOnInit(): void {}

  isCharacterAdded = false;

  //objeto personaje
  character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
    image: '',
  };

  //crear personaje
  addCharacter(): void {
    const data = {
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      location: this.character.location,
      image: this.character.image,
    };
    //control
    var alerta: string = '';
    if (!data.name) {
      alerta = 'Please, add the name!\n';
    }
    if (!data.status) {
      alerta += 'Please, add the status!\n';
    }
    if (!data.species) {
      alerta += 'Please, add the species!\n';
    }
    if (!data.gender) {
      alerta += 'Please, add the gender!\n';
    }
    if (!data.origin) {
      alerta += 'Please, add the origin!\n';
    }
    if (!data.location) {
      alerta += 'Please, add the location!\n';
    }
    if (!data.image) {
      alerta += 'Please, add the image!\n';
    }
    if (alerta.length > 0) {
      alert(alerta);
      return;
    } else {
      this.articulosService.create(data).subscribe(
        (response) => {
          console.log(response);
          this.isCharacterAdded = true;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  //añadir un nuevo personaje
  newCharacter() {
    this.isCharacterAdded = false;

    this.character = {
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      location: '',
      image: '',
    };
  }
}
