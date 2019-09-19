import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({name: 'characterProperties'})
export class CharacterProperties implements PipeTransform {
    public pretty_names = {
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
  transform(value: string): string {
      if (value in this.pretty_names)
        return this.pretty_names[value]
      return null
      }
}