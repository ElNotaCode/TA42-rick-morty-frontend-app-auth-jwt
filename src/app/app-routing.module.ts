import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'characterInfo/:id',
    component: CharacterInfoComponent,
  },
  {
    path: 'addCharacter',
    component: AddCharacterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
