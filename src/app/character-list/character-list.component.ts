import { Component, OnInit } from "@angular/core";
import { CharacterService } from "../_services";
import { first } from "rxjs/operators";
import { Character } from "../_models";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.scss"]
})
export class CharacterListComponent implements OnInit {
  characters: Character[];
  selectedCharacter: Character;
  selectedCharacters: Character[];
  selectedProperty = "name";
  prettyNames;
  query: string;
  descending: boolean;
  listOpenState: boolean;
  constructor(private characterService: CharacterService) {
    this.listOpenState = true;
    this.descending = false;
    this.prettyNames = {
      name: "Name",
      jumps: "Jumps",
      crawl: "Crawl",
      wallJump: "Wall Jump",
      wallCling: "Wall Cling",
      zair: "Zair",
      softLanding: "Soft Landing",
      hardLanding: "Hard Landing",
      initialDashFrames: "Initial Dash Frames",
      fullDashFrames: "Full Dash Frames",
      shortHop: "Short Hop",
      fullHop: "Full Hop",
      shortHopFastFall: "Short Hop FF",
      fullHopFastFall: "Full Hop FF",
      weight: "Weight",
      walkSpeed: "Walk Speed",
      gravity: "Gravity",
      runSpeed: "Run Speed",
      initialDash: "Inital Dash",
      acceleration: "Acceleration",
      friction: "Friction",
      airSpeed: "Air Speed",
      airAcceleration: "Air Acceleration",
      airFriction: "Air Friction",
      fallSpeed: "Fall Speed",
      fastFall: "Fast Fall",
      fullHopInitialSpeed: "Full Hop Initial Speed",
      fullHopHeight: "Full Hop Height",
      shortHopHeight: "Short Hop Height",
      doubleJumpHeight: "Double Jump Height",
      shieldGrab: "Shield Grab",
      shieldDrop: "Shield Drop",
      jumpSquat: "Jump Squat"
    };
  }

  ngOnInit() {
    this.selectedCharacters = new Array<Character>();
    this.loadAllCharacters();
  }

  private loadAllCharacters() {
    this.characterService
      .getAll()
      .pipe(first())
      .subscribe(characters => (this.characters = characters));
  }

  onSelect(character): void {
    if (this.selectedCharacters.indexOf(character) < 0) {
      this.selectedCharacters.push(character);
    }
  }

  onChanged(character: Character): void {
    this.selectedCharacters.splice(
      this.selectedCharacters.indexOf(character),
      1
    );
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
    moveItemInArray(
      this.selectedCharacters,
      event.previousIndex,
      event.currentIndex
    );
  }
}
