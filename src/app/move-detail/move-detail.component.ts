import { Component, OnInit, Input } from '@angular/core';
import { Move } from '../_models';

@Component({
  selector: 'app-move-detail',
  templateUrl: './move-detail.component.html',
  styleUrls: ['./move-detail.component.scss']
})
export class MoveDetailComponent implements OnInit {

  @Input() move : Move;
  constructor(){}

  ngOnInit() {
  }

}
