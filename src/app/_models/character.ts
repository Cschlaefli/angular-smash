export class Character {
    id: number;
    name: string;
    moves: Move[];
    weight: number;
    gravity: number;
    runSpeed: number;
    initialDash: number;
    airSpeed: number;
    airAcceleration: number;
    fallSpeed: number;
    fastFall: number;
    shieldGrab: number;
    shieldDrop: number;
    jumpSquat: number;
    crawl: boolean;
    wallJump: boolean;
    wallCling: boolean;
    zair: boolean;
    softLanding: number;
    hardLanding: number;
    initalDashFrames: number;
    fullDashFrames: number;
    shortHop: string;
    fullHop: string;
    shortHopFastFall: string;
    fullHopFastFall: string;
    walkSpeed: number;
    acceleration: number;
    friction: number;
    fastFallSpeed: number;
    airFriction: number;
    fullHopInitialSpeed: number;
    fullHopHeight: number;
    shortHopHeight: number;
    doubleJumpHeight: number;
}
export class Move {
    id :number;
    type : string;
    characterId : number;
    name: string;
    nameJp: string;
    specialName?: string;
    versions : Version[];
}
export class Version {
    name: string;
    active: string;
    duration: string;
    baseDamage: number;
    landingLag: string;
    landingLagFrames: string;
    intangible: string;
    intangibleMaxPenalty: string;
    durationMaxPenalty: string;
    comment: string;
}
