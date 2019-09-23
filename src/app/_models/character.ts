export class Character {
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
    advantage?: string;
    baseDamage?: string;
    landingLag?: string;
    notes?: string;
    shieldLag?: string;
    shieldStun?: string;
    startup?: string;
    totalFrames?: string;
    type: string;
    whichHitbox?: string;
}
