import { Route } from "./Route";

export class Flight {
    private routes: Route[] = [];
    private polit: 
    constructor (
        private flightId: string,
        private flightName: string,
        private price: number,
        private departureTime: Date,
        private arrivalTime: Date  
    ) {
        this.flightId = flightId;
        this.flightName = flightName;
        this.price = price;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
    }
}