import { BookingFlight } from "../Booking/BookingFlight";

export class Seat {
    private bookingFlights : BookingFlight[];
    constructor(private seatNumber : string, private seatType : boolean, private isAavailble : boolean){
        this.seatNumber = seatNumber;
        this.seatType = seatType;
        this.isAavailble = isAavailble;
    }
    getSeatNumber() : string {
        return this.seatNumber;
    }
    getSeatType() : boolean {
        return this.seatType;
    }
    getIsAavailble() : boolean {
        return this.isAavailble;
    }
    
}