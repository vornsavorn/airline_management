import { BookingFlight } from "./BookingFlight";

export class Meal {

    private bookingFlights: BookingFlight[];
    constructor(private mealType: string[], private quantity: number, private price: number) {
        this.mealType = mealType;
        this.quantity = quantity;
        this.price = price;
        this.bookingFlights = [];
    }

    addBookingFlight(bookingFlight: BookingFlight): void {
        this.bookingFlights.push(bookingFlight);
    }

    getMealType(): string[] {
        return this.mealType;
    }

    getQuantity(): number {
        return this.quantity;
    }

    getPrice(): number {
        return this.price;
    }

    getTotalPrice(): number {
        return this.price * this.quantity;
    }
}