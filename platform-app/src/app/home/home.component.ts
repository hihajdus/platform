import { Component, Input } from '@angular/core';
import {
  trigger,
  transition,
  state,
  animate,
  style,
  AnimationEvent
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("changeText", [
      state(
        "changeStart",
        style({
          opacity: 1,
          color: "lightgreen"
        })
      ),
      state(
        "changeEnd",
        style({
          opacity: 0.8,
          color: "lightgreen"
        })
      ),
      transition("changeStart => changeEnd", [
        animate("5s")
      ])
    ])
  ]
})
export class HomeComponent {
  isChange = false;

  changeText() {
    this.isChange = !this.isChange;
  }
}
