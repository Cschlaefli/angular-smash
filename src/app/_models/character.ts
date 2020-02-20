export class Character {
  id: number;
  name: string;
  moves: Move[];
  weight: number;
  gravity: number;
  runSpeed: number;
  initialDash: number;
  airSpeed: number;
  totalAirAcceleration: number;
  fallSpeed: number;
  fastFall: number;
  shieldGrab: number;
  shieldDrop: number;
  jumpSquat: number;
}
export class Move {
  name: string;
  nameJp: string;
  specialName: string;
  type: string;
  versions: Version[];
}
export class Version {
  name: string;
  active: string;
  duration: string;
  baseDamage: string;
  shieldStun: string;
  landingLag: string;
  landingLagFrames: string;
  intangible: string;
  intangibleMaxPenalty: string;
  durationMaxPenalty: string;
  comment: string;
}
