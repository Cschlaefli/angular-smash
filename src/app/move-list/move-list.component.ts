import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Move } from '../_models';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MoveListComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() moves: Move[];
  grounds: Move[];
  aerials: Move[];
  specials: Move[];
  grabs: Move[];
  dodges: Move[];

  ground: boolean;
  aerial: boolean;
  special: boolean;
  grab: boolean;
  dodge: boolean;

  ngOnInit() {
    this.ground = false;
    this.aerial = false;
    this.special = false;
    this.grab = false;
    this.dodge = false;

    this.grounds = new Array<Move>();
    this.aerials = new Array<Move>();
    this.specials = new Array<Move>();
    this.grabs = new Array<Move>();
    this.dodges = new Array<Move>();
    for (const move of this.moves) {
      if (move.type === 'groundattacks') {
        this.grounds.push(move);
      }
      if (move.type === 'aerialattacks') {
        this.aerials.push(move);
      }
      if (move.type === 'specialattacks') {
        this.specials.push(move);
      }
      if (move.type === 'grabs') {
        this.grabs.push(move);
      }
      if (move.type === 'dodges') {
        this.dodges.push(move);
      }
    }
  }

  ngOnChanges() {
    this.grounds = new Array<Move>();
    this.aerials = new Array<Move>();
    this.specials = new Array<Move>();
    this.grabs = new Array<Move>();
    this.dodges = new Array<Move>();
    for (const move of this.moves) {
      if (move.type === 'groundattacks') {
        this.grounds.push(move);
      }
      if (move.type === 'aerialattacks') {
        this.aerials.push(move);
      }
      if (move.type === 'specialattacks') {
        this.specials.push(move);
      }
      if (move.type === 'grabs') {
        this.grabs.push(move);
      }
      if (move.type === 'dodges') {
        this.dodges.push(move);
      }
    }
  }

}
