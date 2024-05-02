import { Passenger } from '../Person/Passenger';
import { Baggage } from './Baggage';
import { BookingFlight } from './BookingFlight';
import { ReturnTicket } from './ReturnTicket';

export class BookingTrip {
  private passengers: Passenger[] = [];
  private bags: Baggage[] = [];
  private bookingFlights: BookingFlight[] = [];

  getBookingFlights(): BookingFlight[] {
    return this.bookingFlights;
  }

  addPassenger(passenger: Passenger): void {
    this.passengers.push(passenger);
  }

  addBag(baggage: Baggage): void {
    this.bags.push(baggage);
  }

  addBookingFlight(bookingFlight: BookingFlight): void {
    this.bookingFlights.push(bookingFlight);
  }

  getPassengers(): Passenger[] {
    return this.passengers;
  }

  getPassengerCount(): number {
    let count = 0;
    for (let bookingFlight of this.bookingFlights) {
      count += bookingFlight.getPassengers().length;
    }
    return count;
  }

  getPassengersReturnTickets(flightNumber: string): number {
    let passengerReturn = 0;

    for (let bookingFlight of this.bookingFlights) {
      if (bookingFlight.getFlightNumber() === flightNumber) {
        let passengers = bookingFlight.getPassengers();
        for (let passenger of passengers) {
          if (passenger.getReturnTicket() === ReturnTicket.RETURN) {
            passengerReturn++;
            // console.log(passengerReturn);
          }
        }
      }
    }

    return passengerReturn;
  }
}