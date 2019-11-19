import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../_services';
import { first} from 'rxjs/operators';
import { Character } from '../_models';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];
  selectedCharacter: Character;
  selectedCharacters: Character[];
  selectedProperty = 'name';
  prettyNames;
  query: string;
  descending: boolean;
  listOpenState: boolean;
  constructor(
    private characterService: CharacterService,
  ) {
    this.listOpenState = true;
    this.descending = false;
    this.prettyNames = {
    name : 'Name',
    weight : 'Weight',
    gravity : 'Gravity',
    runSpeed : 'Run Speed',
    initialDash : 'Inital Dash',
    airSpeed : 'Air Speed',
    totalAirAcceleration : 'Total Air Acceleration',
    fastFall : 'Fast Fall',
    shieldGrab : 'Shield Grab',
    shieldDrop : 'Shield Drop',
    jumpSquat : 'Jump Squat'
  };
   }

  ngOnInit() {
    this.selectedCharacters = new Array<Character>();
    this.loadAllCharacters();
  }

  private loadAllCharacters() {
    this.characterService.getAll()
      .pipe(first())
      .subscribe(characters => this.characters = characters);
  }

  onSelect(character): void {
    if (this.selectedCharacters.indexOf(character) < 0) {
    this.selectedCharacters.push(character);
    }
  }

  onChanged(character: Character): void {
    this.selectedCharacters.splice(this.selectedCharacters.indexOf(character), 1);
  }

  onSelectedSort(property) {
    const descending = this.descending;
    this.selectedCharacters.sort(function(a, b) {

      if (a[property] === b[property]) {
        return 0;
      }

      if (descending) {
        return a[property] > b[property] ? -1 : 1;
      }
      return a[property] < b[property] ? -1 : 1;
    });
  }

  onSort(property) {
    const descending = this.descending;
    this.characters.sort(function(a, b) {

      if (a[property] === b[property]) {
        return 0;
      }

      if (descending) {
        return a[property] > b[property] ? -1 : 1;
      }
      return a[property] < b[property] ? -1 : 1;
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log(event.previousIndex, event.currentIndex);
    moveItemInArray(this.selectedCharacters, event.previousIndex, event.currentIndex);
  }

}
