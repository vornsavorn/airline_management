import { BookingFlight } from "../Booking/BookingFlight";
import { Meal } from "../Booking/Meal";
import { Employee } from "./Employee";
import { Gender } from "./Gender";
import { Person } from "./Person";

export class Chef extends Employee {
    private bookingFlights: BookingFlight[];

    constructor(
        id: string,
        firstName: string,
        lastName: string,
        gender: Gender,
        salary: number
    ) {
        super(id, firstName, lastName, gender, salary);
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