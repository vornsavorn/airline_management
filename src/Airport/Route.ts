import { Airport } from "./Airport";

export class Route {
    private origin: Airport | undefined;
    private destination: Airport | undefined;
    constructor(
        private departureTime: Date,
        private arrivalTime: Date,
        private originAirport: Airport,
        private destinationAirport: Airport,
        private duration: string
    ) {
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.originAirport = originAirport;
        this.destinationAirport = destinationAirport;
        this.duration = duration;
    }
    getOriginAirport(): Airport {
        return this.originAirport;
    }
    getDestinationAirport(): Airport {
        return this.destinationAirport;
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