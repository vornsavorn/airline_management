import { Airport } from "./Airport";


export class Route {
    private origin: Airport | undefined;
    private destination: Airport | undefined;
    constructor(
        private departureTime: Date,
        private arrivalTime: Date,
        private duration: string
    ) {
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.duration = duration;
    }
    getOrigin(): Airport | undefined {
        return this.origin;
    }
    getDestination(): Airport | undefined {
        return this.destination;
    }
    getDepartureTime(): Date {
        return this.departureTime;
    }
    getArrivalTime(): Date {
        return this.arrivalTime;
    }
    getDuration(): string {
        return this.duration;
    }

}