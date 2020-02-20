import { Component, OnInit, Input } from "@angular/core";
import { Version } from "../_models";
@Component({
  selector: "app-version-detail",
  templateUrl: "./version-detail.component.html",
  styleUrls: ["./version-detail.component.scss"]
})
export class VersionDetailComponent implements OnInit {
  constructor() {}
  @Input() version: Version;

  ngOnInit(): void {}
}
