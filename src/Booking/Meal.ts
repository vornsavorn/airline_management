import { BookingFlight } from "./BookingFlight";
import { MealType } from "./MealType";

export class Meal {
   
    private bookingFlights: BookingFlight[];
    constructor(
        private mealType: MealType, 
        private quantity: number, 
        private price: number
    ) {
        this.mealType = mealType;
        this.quantity = quantity;
        this.price = price;
        this.bookingFlights = [];
    }

    addBookingFlight(bookingFlight: BookingFlight): void {
        this.bookingFlights.push(bookingFlight);
    }

    getMealType(): MealType {
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

    printBookingFlightDetails(): void {
        console.log("Booking Flight Details:");
        this.bookingFlights.forEach((bookingFlight, index) => {
            console.log(`Booking Flight ${index + 1}:`, bookingFlight);
        });
    }
}