import { Airline } from "./Airline/Airline";
import { Employee } from "./Person/Employee";
import { Gender } from "./Person/Gender";

// As an airline manager, I want to find out how much salary I pay all my employees. |||
// Create an instance of the Airline class
let airline = new Airline("C8 Airline");

// Create employees and add them to the airline
let employee1 = new Employee("EY1", "Theun", "En", Gender.MALE, 5000);
let employee2 = new Employee("EY2", "Savorn", "Vorn", Gender.FEMALE, 6000);
let employee3 = new Employee("EY3", "Thary", "Oeun", Gender.FEMALE, 5500);
let employee4 = new Employee("EY4", "Layhour", "Met", Gender.MALE, 7000);

airline.addEmployee(employee1);
airline.addEmployee(employee2);
airline.addEmployee(employee3);
airline.addEmployee(employee4);

// Calculate the total salary
let totalSalary = airline.getSalary();
console.log(`The total salary paid to all employees of ${airline.getName()} is: $${totalSalary}`);