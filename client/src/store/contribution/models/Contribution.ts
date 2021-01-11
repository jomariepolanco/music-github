import { Audio } from "../../audio/models/Audio";

export interface Contribution {
    id: number;
    comment: string;
    track: string;
    date: Date;
    isAccepted: boolean;
    audio: Audio;
}