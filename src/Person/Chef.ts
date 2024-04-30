import { BookingFlight } from "../Booking/BookingFlight";
import { Meal } from "../Booking/Meal";
import { Gender } from "./Gender";
import { Person } from "./Person";

export class Chef extends Person {
    private bookingFlights: BookingFlight[];

    constructor(
        id: string,
        firstName: string,
        lastName: string,
        gender: Gender
    ) {
        super(id, firstName, lastName, gender);
        this.bookingFlights = [];
    }

    addFlight(bookingFlight: BookingFlight): void {
        this.bookingFlights.push(bookingFlight);
    }

    getMeals(): Meal[] {
        let allMeals: Meal[] = [];

        for (let bookingFlight of this.bookingFlights) {
            let meals = bookingFlight.getMealsFromBookingFlight();
            allMeals = allMeals.concat(meals);
        }

        return allMeals;
    }

    getMealTypesFromBookingFlight(): string[] {
        let allMeals = this.getMeals();
        let mealTypes: string[] = [];

        for (let meal of allMeals) {
            let mealType = meal.getMealType();
            if (!mealTypes.includes(mealType)) {
                mealTypes.push(mealType);
            }
        }

        return mealTypes;
    }
}