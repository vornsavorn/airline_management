import { Airport } from "./Airport";


export class Route {
    private origin : Airport;
    private destination : Airport;
    constructor(
        private departureTime: Date,
        private arrivalTime: Date,
        private duration: string
    ){
       this.departureTime = departureTime;
       this.arrivalTime = arrivalTime;
       this.duration = duration;
    }
    public getOrigin() : Airport {
        return this.origin;
    }
    public getDestination() : Airport {
        return this.destination;
    }
    public getDepartureTime() : Date {
        return this.departureTime;
    }
    public getArrivalTime() : Date {
        return this.arrivalTime;
    }
    public getDuration() : string {
        return this.duration;
    }

}