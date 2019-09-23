import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'characterProperties'})
export class CharacterProperties implements PipeTransform {
    public prettyNames = {
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
  transform(value: string): string {
      if (value in this.prettyNames) {
        return this.prettyNames[value];
      }
      return null;
      }
}
