import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../_services';
import { first } from 'rxjs/operators';
import { Character } from '../_models';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];
  selectedCharacter : Character;
  selectedProperty = "runSpeed";
  prettyNames;
  descending : boolean;
  constructor(
    private characterService: CharacterService,
  ) {
    this.descending = false;
    this.prettyNames = {
    "name" : "Name",
    "weight" : "Weight",
    "gravity" : "Gravity",
    "runSpeed" : "Run Speed",
    "initialDash" : "Inital Dash",
    "airSpeed" : "Air Speed",
    "totalAirAcceleration" : "Total Air Acceleration",
    "fastFall" : "Fast Fall",
    "shieldGrab" : "Shield Grab",
    "shieldDrop" : "Shield Drop",
    "jumpSquat" : "Jump Squat"
  }
   }

  ngOnInit() {
    this.loadAllCharacters();
  }

  private loadAllCharacters(){
    this.characterService.getAll()
      .pipe(first())
      .subscribe(characters => this.characters = characters)
  }

  onSelect(character): void {
    this.selectedCharacter = character;
  }

  onSort(property)
  {
    let descending = this.descending;
    this.characters.sort(function(a, b){
      if(descending)
        return a[property] - b[property]
      return b[property] - a[property]
    })
  }

  compare(a, b)
  {
  }

}
