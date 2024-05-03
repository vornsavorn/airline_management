import { BookingFlight } from "../Booking/BookingFlight";

class AirportController {
    private bookings: BookingFlight[] = [];
    
    addBooking(booking: BookingFlight): void {
        this.bookings.push(booking);
    }

}