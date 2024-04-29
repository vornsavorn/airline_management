import { Passenger } from '../Person/Passenger';
import { Baggage } from './Baggage';
import { BookingFlight } from './BookingFlight';

export enum ReturnTicket {
    Retrun = 'returnTicket'
}

export class BookingTrip {
    private passengers : Passenger[];
    private bags: Baggage[] = [];
    private bookingFlight: BookingFlight[] = [];
    private returnTicket: ReturnTicket[] = [];
   
   getBookingFlight() {
    return this.bookingFlight;
   }

   setReturnTicket(returnTicket: ReturnTicket) {
    this.returnTicket?.push(returnTicket);
    }

    getAllReturnTicket() {

    }

    addPassengerBag(baggage: Baggage): void {
        this.bags.push(baggage);
    }

    addBookingFlight(bookingFlight: BookingFlight): void {
        this.bookingFlight.push(bookingFlight);
    }
    
}