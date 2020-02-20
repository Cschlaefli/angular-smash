import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "characterProperties" })
export class CharacterProperties implements PipeTransform {
  public prettyNames = {
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
  transform(value: string): string {
    if (value in this.prettyNames) {
      return this.prettyNames[value];
    }
    return null;
  }
}
