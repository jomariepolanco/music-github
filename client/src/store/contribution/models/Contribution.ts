export interface Contribution {
    id: number;
    comment: string;
    track: string;
    date: Date;
    isAccepted: boolean;
    audioId: number;
    producerId: number;
}