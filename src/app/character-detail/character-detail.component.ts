import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { CharacterService } from '../_services';
import { Character } from '../_models';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  @Input() characterID: number;
  character : Character;
  @Output() characterChanged = new EventEmitter<Character>();
  constructor(
    private characterService: CharacterService,
  ) {
   }

  ngOnInit() {
    this.characterService.getById(this.characterID)
      .subscribe(c => this.character = c);
  }

  removeCharacter(character: Character) {
    this.characterChanged.emit(character);
    this.character = null;
  }

}
