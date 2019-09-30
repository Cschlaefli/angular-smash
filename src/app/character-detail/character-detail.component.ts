import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Character } from '../_models';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  @Input() character: Character;
  @Output() characterChanged = new EventEmitter<Character>();
  constructor() { }

  ngOnInit() {
  }

  removeCharacter(character: Character) {
    this.characterChanged.emit(character);
    this.character = null;
  }

}
