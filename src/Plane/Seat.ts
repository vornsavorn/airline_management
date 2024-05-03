import { BookingFlight } from "../Booking/BookingFlight";

export class Seat {
    
    constructor(
        private seatNumber : string,
        private seatType : boolean, 
        private isAavailble : boolean,
        private bookingFlights : BookingFlight[] = []
    ){
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
    
    isSeatAvailable(): boolean {
        return this.isAavailble;
    }

    bookSeat(flight: BookingFlight): void {
        if (this.isAavailble) {
            this.bookingFlights.push(flight);
            this.isAavailble = false;
            console.log(`Seat ${this.seatNumber} has been booked for flight ${flight.getFlightNumber()}.`);
        } else {
            console.log(`Seat ${this.seatNumber} is already booked.`);
        }
    }

    // Method to cancel booking for the seat
    cancelBooking(): void {
        if (!this.isAavailble) {
            this.bookingFlights.pop();
            this.isAavailble = true;
            console.log(`Booking for seat ${this.seatNumber} has been canceled.`);
        } else {
            console.log(`Seat ${this.seatNumber} is not booked.`);
        }
    }
    
}