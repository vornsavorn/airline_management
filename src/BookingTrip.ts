import { Passenger } from './Passenger';
export class BookingTrip {
    private passengers : Passenger[];
    constructor (private destination: string, private departureDate: Date, private returnDate: Date){
        this.destination = destination;
        this.departureDate = departureDate;
        this.returnDate = returnDate;
        this.passengers = [];
        
    }
    getDestination(): string {
        return this.destination;
    }
    getDepartureDate(): Date{
        return this.departureDate;
    }
    getReturnDate(): Date{
        return this.returnDate;
    }
    addPassengers(passenger : Passenger): void {
        this.passengers.push(passenger);
    }
}