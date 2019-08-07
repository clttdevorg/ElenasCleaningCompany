import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  nameOfPokemon: string = null;
  pokemon: any = null;
  constructor(private restService: RestService) { }
  ngOnInit() {
  }

  clickHandler(): void {
    this.getPokemons(this.nameOfPokemon);
  }

  getPokemons(name: string): void {
    this.restService.get(`https://pokeapi.co/api/v2/pokemon/${name}/`).subscribe(data => {
      this.pokemon = data
      console.log(this.pokemon);
    });
  }

}
